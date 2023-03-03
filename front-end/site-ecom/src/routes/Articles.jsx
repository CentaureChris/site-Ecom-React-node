import React,{useEffect, useState} from 'react';
import Home from '../views/HomeView';

const ArticlesList = () => {
const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/api/article")
    .then((response) => response.json())
    .then((data) => {
       setDatas(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
}, []);

  return (
    <Home articles={datas}/>
  );
}

export default ArticlesList;
