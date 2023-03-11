import React, { useState, useEffect } from 'react';

const UsersListAdmin = (listItem) => {

    const [datas, setDatas] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        fetch("/api/user", {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + token
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setDatas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [token])

    const list = datas.map((item) =>
        <tr key={item.id}>
            {item !== []
                ? <>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{item.email}</td>
                    <td>{item.niveau}</td>
                </>
                : ""
            }
        </tr>
    );

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Niveau</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </>
    )
}

export default UsersListAdmin;