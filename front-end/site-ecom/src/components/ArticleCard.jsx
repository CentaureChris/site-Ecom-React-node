import { useNavigate } from 'react-router-dom';
import styles from "../assets/css/articleCard.module.css";

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
            {/* <div>
                <img src={"/files/images/" + article.datas.photo} alt="" />
                <p>id: {article.datas.id}</p>
                <p>nom: {article.datas.nom}</p>
                <p>prix: {article.datas.prix}</p>
            </div>
            <div>
                <button>Add to Cart</button>
                <button onClick={()=>{deleteProd(idArt)}}>Delete</button>
            </div> */}
            <div className="main">
                <ul className={styles.cards}>
                    <li className={styles.cards_item}>
                    <div className={styles.card} tabIndex="0">
                        <div className={styles.card_image}><img src={"/files/images/" + article.datas.photo} alt={article.datas.photo} /></div>
                        <div className={styles.card_content}>
                        <h2 className={styles.card_title}>{article.datas.nom} {article.datas.prix}</h2>
                        <div className={styles.card_text}>
                            <p>{article.datas.description}</p>
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
                <div>
                    <button>Add to Cart</button>
                    <button onClick={()=>{deleteProd(idArt)}}>Delete</button>
                </div> 
            </div>
        </>
    )
}

export default ArticleCard;