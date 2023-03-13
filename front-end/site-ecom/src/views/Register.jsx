import React, { useState } from 'react';

const RegisterView = ({register}) => {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [nom,setNom] = useState("")
    const [prenom,setPrenom] = useState("")
    const [adresse,setAdresse] = useState("")
    const [code_postal,setCode_postal] = useState("")
    const [ville,setVille] = useState("")

    const submit = async (event)=>{
        event.preventDefault()
        const res = await register({email, pass, nom, prenom, adresse, code_postal, ville})
        console.log(res)
    }
    
    return (
        <>
           <div  className="text-center container" >
                <h1>Formulaire d'Inscription</h1>
                <form action="" onSubmit={submit } className="form-group row justify-content-center" >
                    <div>
                        <label htmlFor="email"></label>
                        <input class="form-control" type="text" placeholder="Enter your email" id="email" name ="email" onChange={(event) => setEmail(event.target.value)} value={email} />
                    </div>
                    <div>
                        <label htmlFor="pass"></label>
                        <input class="form-control" type="text" placeholder="Enter your password" id="pass" name ="pass" onChange={(event) => setPass(event.target.value)} value={pass} />
                    </div>
                    <div>
                        <label htmlFor="nom"></label>
                        <input class="form-control" type="text" placeholder="Enter your name" id="nom" name ="nom" onChange={(event) => setNom(event.target.value)} value={nom} />
                    </div>
                    <div>
                        <label htmlFor="prenom"></label>
                        <input class="form-control" type="text" placeholder="Enter your prenom" id="prenom" name ="prenom" onChange={(event) => setPrenom(event.target.value)} value={prenom} />
                    </div>
                    <div>
                        <label htmlFor="adresse"></label>
                        <input class="form-control" type="text" placeholder="Enter your adresse" id="adresse" name ="adresse" onChange={(event) => setAdresse(event.target.value)} value={adresse} />
                    </div>
                    <div>
                        <label htmlFor="codePostal"></label>
                        <input class="form-control" type="text" placeholder="Enter your Code postal" id="codePostale" name ="codePostale" onChange={(event) => setCode_postal(event.target.value)} value={code_postal} />
                    </div>
                    <div>
                        <label htmlFor="ville"></label>
                        <input class="form-control" type="text" placeholder="Enter your ville" id="ville" name ="ville" onChange={(event) => setVille(event.target.value)} value={ville} />
                    </div>
                    <button type='submit' className='btn btn-success m-5 w-25' >Register</button>
                    <p><a href="/login">If you already have an account login here</a></p>
                </form>
            </div>
        </>
    );
}

export default RegisterView;