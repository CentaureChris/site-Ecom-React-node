import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ article, deleteArt }) => {
    
    const token = localStorage.getItem('token')
    var url = window.location.pathname;
    const idArt = url.substring(url.lastIndexOf('/') + 1);
    const navigate = useNavigate();

    async function deleteProd(id){
        if(window.confirm("Voulez vous suprimmer l'article")){
            const res = await deleteArt.deleteArt({id,token})
            console.log(res)
            if(res === "erreur de token"){
                alert("Opération interdite")
            }else {
                alert(res)
                navigate('/')
            }
        }
    }  
    return (
        <>
            <div>
                <p>id: {article.datas.id}</p>
                <p>nom: {article.datas.nom}</p>
                <p>prix: {article.datas.prix}</p>
            </div>
            <div>
                <button>Add to Cart</button>
                <button onClick={()=>{deleteProd(idArt)}}>Delete</button>
            </div>
        </>
    )
}

export default ArticleCard;