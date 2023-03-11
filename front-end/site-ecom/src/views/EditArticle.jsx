import React, {useState,useEffect} from "react"
import { callEditArtApi } from "../utils/apiCalls"


const EditArticle = () => {

    const [datas, setDatas] = useState([]);
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    const [nom,setNom] = useState("")
    const [description,setDescription] = useState("")
    const [prix,setPrix] = useState("")
    const token = localStorage.getItem('token')

    const submit = async (event)=>{
        // console.log(token)
        event.preventDefault()
        const res = callEditArtApi({token,id,nom,description,prix})
    }

    useEffect(() => {
        fetch(`/api/article/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setDatas(data);
                setNom(data.nom)
                setDescription(data.description)
                setPrix(data.prix)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);


    return (
        <>
            <div>
                <h1>Modifier un Article</h1>
                <form action="" onSubmit={submit} >
                    <div>
                        <label htmlFor="nom"></label>
                        <input type="text" placeholder="Enter article name" id="nom" name ="nom" onChange={(event) => setNom(event.target.value)} value={nom} />
                    </div>
                    <div>
                        <label htmlFor="description"></label>
                        <input type="text" placeholder="Enter your description" id="description" name ="description" onChange={(event) => setDescription(event.target.value)} value={description} />
                    </div>
                    <div>
                        <label htmlFor="prix"></label>
                        <input type="text" placeholder="Enter your prix" id="prix" name ="prix" onChange={(event) => setPrix(event.target.value)} value={prix} />
                    </div>
                    <button type="submit">Modifier l'article</button>
                </form>
            </div>
        </>
    )
}

export default EditArticle