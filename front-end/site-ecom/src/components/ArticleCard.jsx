const ArticleCard = (article) => {
    return(
        <>
            <div>
                <p>id: {article.article.id}</p>
                <p>nom: {article.article.nom}</p>
                <p>prix: {article.article.prix}</p>
            </div>
        <button>Add to Cart</button>
        </>
    )
}

export default ArticleCard;