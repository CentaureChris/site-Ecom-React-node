import React, { useContext } from "react";
import { CartContext } from '../Context.js';
import classe from "../assets/css/articleCard.module.css";

const Home = (articles) => {

    const [cartContext, setCartContext] = useContext(CartContext);

    const getTotalCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        let totalCart = 0
        if (localStorage.getItem('cart')) {
            cart.forEach(item => {
                totalCart += item.qty
            });
        }
        return totalCart
    }

    const addToCart = (art) => {
        const cart = localStorage.getItem("cart")
        if (cart) {
            // console.log(art)
            const newCart = JSON.parse(cart)
            let indexArt = newCart.findIndex(x => x.id === art.id)
            if (indexArt !== -1) {
                newCart[indexArt].qty += 1
                localStorage.setItem('cart', JSON.stringify(newCart))
            } else {
                art.qty = 1
                newCart.push(art)
                // console.log(newCart)
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
        } else {
            art.qty = 1
            // console.log(art)
            localStorage.setItem("cart", JSON.stringify([art]))
        }
        setCartContext(getTotalCart)
    }

    const arts = articles.articles.map((art) =>
        <section className={classe.card} key={art.id}>
            <span className={classe.product_price}>{art.prix} €</span>
            <a href={"/article/" + art.id + ""} >
                <div className={classe.product_image}>
                    <img src={"/files/images/" + art.photo} alt={art.photo} draggable="false" />
                </div>
                <div className={classe.product_info}>
                    <h2>{art.nom}</h2>
                    <p className={classe.product_info}>{art.description}</p>
                </div>
            </a>

                <div className={classe.btn}>
                    <button className={classe.buy_btn} onClick={() => addToCart(art)}>Add to cart</button>
                </div>
        </section>
    );



    return (
        <>
            <main className={classe.container}>
                {arts}
            </main>
        </>
    );
}

export default Home;