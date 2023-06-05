import React, {useState} from 'react';
import {accountService} from "../../services/account.service";
import "./auth.css"
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()
    // const [login, setLogin] = useState('')
    // const[password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({
        username: "admin@ms.com",
        password: "password"
    })
//Gestion de la modification des champs du formulaire de login
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    //Envoi du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(credentials)
            .then(res => {
                //Sauvegarde du token et envoi vers admin
                accountService.saveToken(res.data.token)
                navigate('/admin', {replace: true})
            })
            .catch(error => console.log(error))
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="group">
                <label htmlFor="login">Identifiant</label>
                <input type="text" name="username" value={credentials.username} onChange={onChange}/>
            </div>
            <div className="group">
                <label htmlFor="password">Mot de passe</label>
                <input type="text" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className="group">
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Login;