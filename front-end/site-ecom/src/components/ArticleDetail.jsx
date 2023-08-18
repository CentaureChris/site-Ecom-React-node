import { useNavigate } from 'react-router-dom';
import styles from "../assets/css/articleDet.module.css";

const ArticleDetail = ({ article }) => {
    console.log(article.datas)

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.product_img}>
                    <img src={"/files/images/" + article.datas.photo} alt={article.datas.photo} />
                </div>
                <div className={styles.product_info}>
                    <div className={styles.product_text}>
                        <h1>{article.datas.nom}</h1>
                        {/* <h2>by studio and friends</h2> */}
                        <p>{article.datas.description}</p>
                    </div>
                    <div className={styles.product_price_btn}>
                        <p><span>{article.datas.prix}$</span></p>
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleDetail;