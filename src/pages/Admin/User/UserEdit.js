import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {userService} from "../../../services/user.service";

const UserEdit = () => {
    const [user, setUser] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    //useParams : permet de récupérer le paramètre qui se trouve dans l'URL, l'ID utilisateur
    const { uid } = useParams()

    //La fonction onChange est utilisée pour mettre à jour l'état d'un formulaire en utilisant les
    //valeurs saisies par l'utilisateur. Elle permet de réagir aux changements d'entrée
    //et de garder les données du formulaire à jour dans l'état du composant.
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        userService.updateUser(user)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    // Récupération de l'utilisateur à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            userService.getUser(uid)
                .then(res => {
                    setUser(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="userEdit">
            user edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="login">Identifiant</label>
                    <input type="text" name="username" value={user.name} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="login">email</label>
                    <input type="text" name="email" value={user.name} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name="password" value={user.name} onChange={onChange}/>
                </div>
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;