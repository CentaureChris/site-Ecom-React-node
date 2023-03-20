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
        setCartContext(getTotalCart)
    }

    const arts = articles.articles.map((art) =>
        <div className='article_card card' key={art.id}>
            <a href={"/article/" + art.id + ""} className='article_body'>
                <div className='card-body'>
                    <p className='card-title'>id:{art.id + ' ' + art.nom}</p>
                    <p className='card-text'>{art.description}</p>
                    <p>{art.prix} €</p>
                </div>
            </a>
            <button className='btn btn-success btn-sm mx-5 my-2' onClick={() => addToCart(art)}>Add to cart</button>
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