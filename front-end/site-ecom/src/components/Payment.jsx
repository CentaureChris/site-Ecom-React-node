import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [montant, setMontant] = useState()

  const totalCart = () => {
    let total = 0
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart.forEach(item => total += (item.qty * item.prix))
    return total*100
}

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    setMontant(totalCart())
    let payAmount = montant
    fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({payAmount}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [montant]);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      <h1>Votre panier contient un total de {montant/100}€</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm /> 
        </Elements>
      )}
    </>
  );
}

export default Payment;