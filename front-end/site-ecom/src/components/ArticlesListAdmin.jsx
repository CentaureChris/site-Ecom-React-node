import React, { useEffect, useState } from 'react';
import axios from "axios"
import { callDeleteArtApi, getListArt, callAddArtApi } from "../utils/apiCalls"


const ArticlesListAdmin = () => {

    const [datas, setDatas] = useState([])
    const token = localStorage.getItem('token')
    const [nom, setNom] = useState("")
    const [description, setDescription] = useState("")
    const [prix, setPrix] = useState("")
    const [photo, setPhoto] = useState("")

    const styles = {
        img:{
            width: "100px",
            height: "100px",
            border: "1px solid grey" , 
            borderRadius: "10px"  
        },
        fileCol:{
            width:'15%',
        }
    }

    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('photo', photo,photo.name)
        formData.set("nom",nom)
        formData.set("description",description)
        formData.set("prix",prix)
        setPhoto(formData)
        console.log(formData)
        let testUpload = await(callAddArtApi({ token, photo}))
        console.log(testUpload)
        setDatas(await getListArt())
    }

    useEffect(() => {
        // fetch("/api/article")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setDatas(data);
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
        axios.get("/api/article")
            .then((response) => {
                setDatas(response.data)
            })
    }, []);

    async function deleteProd(id) {
        if (window.confirm("Voulez vous suprimmer l'article")) {
            await callDeleteArtApi({ id, token })
            setDatas(await getListArt())
        }
    }

    const list = datas.map((item) =>
        <tr key={item.id}>
            {item !== []
                ? <>
                    <td><img src={item.photo} alt="product" style={styles.img} /></td>
                    <td>{item.nom}</td>
                    <td>{item.description}</td>
                    <td>{item.prix} €</td>
                    <td>
                        <a href={"/article/edit/" + item.id + ""}><button type="button" className="btn btn-info m-2">edit</button></a>
                        <button type="button" className="btn btn-warning m-2" onClick={() => { deleteProd(item.id, token) }}>delete</button>
                    </td>
                </>
                : ""
            }
        </tr>
    );

    return (
        <>
            <div>
                <form onSubmit={submit} encType="multipart/form-data" method="post">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Nom</th>
                                <th>description</th>
                                <th>prix</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.fileCol}><input className="form-control" type="file" id="photo" name ="photo" onChange={(event) => setPhoto(event.target.files[0])} value={datas.photo}/></td>
                                <td><input className="form-control" type="text" placeholder="name of article" id="nom" name ="nom" onChange={(event) => setNom(event.target.value)} value={datas.nom}/></td>
                                <td><input className="form-control" type="text" placeholder="description of article" id="description" name ="description" onChange={(event) => setDescription(event.target.value)} value={description}/></td>
                                <td><input className="form-control" type="text" placeholder="price of article" id="prix" name ="prix" onChange={(event) => setPrix(event.target.value)} value={prix}/></td>
                                <td><button className="btn btn-success " type="submit">Add</button></td>
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