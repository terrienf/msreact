import React, {useState} from 'react';
import {accountService} from "../../services/account.service";
import "./auth.css"
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()
    // const [login, setLogin] = useState('')
    // const[password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({
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
                const roles = res.data.roles;
                console.log("Roles:", roles);
                navigate('/admin', {replace: true})
            })
            .catch(error => console.log(error))
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="login-card">
                <div className="card-header">
                    <h1>Login</h1>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="login">Identifiant</label>
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="login-button">Login</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;