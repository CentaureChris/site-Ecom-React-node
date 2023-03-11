import React, { useState } from 'react';
import ArticlesListAdmin from '../components/ArticlesListAdmin';
import UsersListAdmin from '../components/UsersListAdmin';



const AdminView = () => {

    const [list, setList] = useState(localStorage.getItem('list'))

    const displayUser = () => {
        setList('users')
        localStorage.setItem('list', "users")
    }

    const displayArt = () => {
        setList('articles')
        localStorage.setItem('list', "articles")
    }

    return (
        <>
            <button onClick={() => displayUser()}>List User</button>
            <button onClick={() => displayArt()}>List Articles</button>
            {list === "articles" ? <ArticlesListAdmin /> : ""}
            {list === "users" ? <UsersListAdmin  /> : ""}
        </>
    )
}

export default AdminView;