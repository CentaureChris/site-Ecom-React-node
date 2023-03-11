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
            color: "red",
            margin: "5px"
        },
    };

    const cart = JSON.parse(localStorage.getItem('cart'))
    let listArt;
    if(cart ){
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
    }else{
        listArt = "Your cart is empty"
    }


    return (
        <>
            <div>
                {listArt}
            </div>
            <a href="/"><button>Valider le panier</button></a>
        </>
    )
}

export default Cart;