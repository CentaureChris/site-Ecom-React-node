import React, { useEffect, useState } from 'react';
// import ArticleCard from '../components/ArticleCard';
import ArticleDetail from '../components/ArticleDetail';

const ArticleDet = ({ deleteArt }) => {
    const [datas, setDatas] = useState([]);
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        fetch(`/api/article/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setDatas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    return (
        <>
            <ArticleDetail article={{ datas }} deleteArt={{ deleteArt }} />
        </>
    );
}

export default ArticleDet;