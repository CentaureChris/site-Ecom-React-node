import React, { useEffect, useState } from 'react';
import { callDeleteArtApi, getListArt, callAddArtApi } from "../utils/apiCalls"


const ArticlesListAdmin = () => {

    const [datas, setDatas] = useState([])
    const token = localStorage.getItem('token')
    const [nom, setNom] = useState("")
    const [description, setDescription] = useState("")
    const [prix, setPrix] = useState("")

    const submit = async (event) => {
        // console.log(token)
        event.preventDefault()
        callAddArtApi({ token, nom, description, prix })
        setDatas(await getListArt())
        // console.log(datas)
    }

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

    async function deleteProd(id) {
        if (window.confirm("Voulez vous suprimmer l'article")) {
            await callDeleteArtApi({ id, token })
            setDatas(await getListArt())
            // console.log(datas)
        }
    }

    const list = datas.map((item) =>
        <tr key={item.id}>
            {item !== []
                ? <>
                    <td>{item.nom}</td>
                    <td>{item.description}</td>
                    <td>{item.prix} €</td>
                    <td>
                        <a href={"/article/edit/" + item.id + ""}><button type="button" >edit</button></a>
                        <button type="button" onClick={() => { deleteProd(item.id, token) }}>delete</button>
                    </td>
                </>
                : ""
            }
        </tr>
    );

    return (
        <>
            <div>
                <form onSubmit={submit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>description</th>
                                <th>prix</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" placeholder="name of article" id="nom" name ="nom" onChange={(event) => setNom(event.target.value)} value={datas.nom}/></td>
                                <td><input type="text" placeholder="description of article" id="description" name ="description" onChange={(event) => setDescription(event.target.value)} value={description}/></td>
                                <td><input type="text" placeholder="price of article" id="prix" name ="prix" onChange={(event) => setPrix(event.target.value)} value={prix}/></td>
                                <td><button type="submit">Add</button></td>
                            </tr>
                            {list}
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}

export default ArticlesListAdmin;