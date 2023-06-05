import React, {useState} from 'react';
import axios from "axios";
import {accountService} from "../../services/account.service";
import "./auth.css"

const Login = () => {
    // const [login, setLogin] = useState('')
    // const[password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({
        username: "admin@ms.com",
        password: "password"
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(credentials)
        axios.post('http://127.0.0.1:8000/api/login_check', credentials)
            .then(res =>{
                console.log(res)
                accountService.saveToken(res.data.token)
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