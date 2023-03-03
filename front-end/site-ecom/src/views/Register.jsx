const RegisterView = () => {



    return (
        <>
           <div>
                <h1>Formulaire d'Inscription</h1>
                <form action="" >
                    <div>
                        <label htmlFor="login"></label>
                        <input type="text" placeholder="Enter your Login" id="login" name ="login" />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="text" placeholder="Enter your password" id="pass" name ="pass" />
                    </div>
                    <div>
                        <label htmlFor="nom"></label>
                        <input type="text" placeholder="Enter your name" id="nom" name ="nom" />
                    </div>
                    <div>
                        <label htmlFor="prenom"></label>
                        <input type="text" placeholder="Enter your prenom" id="prenom" name ="prenom" />
                    </div>
                    <div>
                        <label htmlFor="adresse"></label>
                        <input type="text" placeholder="Enter your adresse" id="adresse" name ="adresse" />
                    </div>
                    <button type='submit' >Connexion</button>
                    <p><a href="/login">If you already have an account login here</a></p>
                </form>
            </div>
        </>
    );
}

export default RegisterView;