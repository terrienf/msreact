import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {userService} from "../../../services/user.service";


const UserAdd = () => {
    const [user, setUser] = useState([])
    let navigate = useNavigate()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        e.preventDefault()
    }

    // Gestion de la soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        userService.addUser(user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className="UserEdit">
            User Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default UserAdd;