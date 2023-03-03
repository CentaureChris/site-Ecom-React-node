import React, { useEffect, useState } from 'react';
import UserView from '../views/UserView';

export default function UsersList() {
    const [datas, setDatas] = useState([]);
    const token = localStorage.getItem('token')

    useEffect(() => {
        fetch("/api/user",{
            headers: {
                'Authorization': "Bearer " + token
            },
            })
            .then((response) => response.json())
            .then((data) => {
                setDatas(data);
                console.log(datas);
            })
            .catch((err) => {
                console.log(err.message);
            });
    });


    return (
        <UserView users={datas} />
    );
}

