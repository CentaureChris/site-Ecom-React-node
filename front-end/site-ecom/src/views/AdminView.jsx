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
            <div className='text-center'>
                <button className='btn btn-secondary m-2' onClick={() => displayUser()}>List User</button>
                <button className='btn btn-secondary m-2' onClick={() => displayArt()}>List Articles</button>
            </div>
                {list === "articles" ? <ArticlesListAdmin /> : ""}
                {list === "users" ? <UsersListAdmin /> : ""}
        </>
    )
}

export default AdminView;