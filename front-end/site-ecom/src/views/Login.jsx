import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 const Login = ({login}) => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const navigate = useNavigate();

    const submit = async (event) =>{
        event.preventDefault();
        const res = await login({email,pass})
        // console.log(res)
        if(res.user){
            navigate('/')
        }else{
            alert(res.error)
        }
    }       

    return (
        <>
            <div className="text-center container" >
                <h1>Formulaire de Connexion</h1>
                <form action="" onSubmit={submit} className="form-group row justify-content-center" >
                    <div>
                        <label htmlFor="email"></label>
                        <input class="form-control" type="text" placeholder="Enter your email" id="email" name ="email" onChange={(event) => setEmail(event.target.value)} value={email} />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input class="form-control"  type="text" placeholder="Enter your password" id="password" name ="password" onChange={(event) => setPass(event.target.value)} value={pass}/>
                    </div>
                    <button type='submit' class="btn btn-success w-25 m-5" >Connexion</button>
                    <p><a href="/register">If you don't have any account register here</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;