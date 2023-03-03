import '../assets/css/home.css'

const Home = (articles) => {

    const addToCart =  (art) => {
        const cart = localStorage.getItem("cart")
        if(cart){
            console.log(art)
            const newCart = JSON.parse(cart)
            let indexArt = newCart.findIndex(x => x.id === art.id)
            if (indexArt !== -1) {
                newCart[indexArt].qty += 1
                localStorage.setItem('cart',JSON.stringify(newCart))
            }else{
                art.qty = 1    
                newCart.push(art)
                console.log(newCart)
                localStorage.setItem('cart',JSON.stringify(newCart))
            }
        }else{
            art.qty = 1
            console.log(art)
            localStorage.setItem("cart",JSON.stringify([art]))
        }
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
            <button onClick={() => addToCart(art) }>Add to cart</button>
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