import React from "react"
import { callApiCreateOrder } from "../utils/apiCalls"

const Cart = () => {

    const styles = {
        list: {
            backgroundColor: "#f1f1f1",
            width: "100%",
            textAlign: "center"
        },
        item: {
            border: "1px solid black",
            padding: "10px",
            margin: "5px"
        },
    };

    const cart = JSON.parse(localStorage.getItem('cart'))
    const userdatas = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    const totalCart = () => {
        let total = 0
        const cart = JSON.parse(localStorage.getItem('cart'))
        cart.forEach(item => total += (item.qty * item.prix))
        return total
    }

    const cartValidate = () => {

        if(window.confirm('Valider la commande?')){
            let amount = totalCart()
            let state = 0
            let id_user = userdatas.id
            callApiCreateOrder({ token,id_user,amount,state })
        }

    }

    let listArt;
    if (cart) {
        listArt = cart.map((art) =>
            <div key={art.id} styles={styles.list}>
                <a href={"/article/" + art.id + ""} className='article_body'>
                    <div style={styles.item}>
                        <p>id:{art.id + ' ' + art.nom}</p>
                        <p>{art.description}</p>
                        <p>{art.prix} €</p>
                        <p>{art.qty} </p>
                    </div>
                </a>
            </div>
        );
    } else {
        listArt = "Your cart is empty"
    }

    return (
        <>
            <div>
                {listArt}
            </div>
            <button type="button" onClick={() => { cartValidate() }}>Valider le panier</button>
        </>
    )
}

export default Cart;