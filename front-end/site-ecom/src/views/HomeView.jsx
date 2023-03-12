import '../assets/css/home.css'
import React, { useContext } from "react";
import { CartContext } from '../Context.js';

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
        // window.location.reload()
        setCartContext(getTotalCart)
    }

    const arts = articles.articles.map((art) =>
        <div className='article_card' key={art.id}>
            <a href={"/article/" + art.id + ""} className='article_body'>
                <div >
                    <p>id:{art.id + ' ' + art.nom}</p>
                    <p>{art.description}</p>
                    <p>{art.prix} €</p>
                </div>
            </a>
            <button onClick={() => addToCart(art)}>Add to cart</button>
        </div>
    );



    return (
        <>
            <div className='article_list'>
                {arts}
            </div>
        </>
    );
}

export default Home;