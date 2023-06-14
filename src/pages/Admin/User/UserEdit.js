import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {userService} from "../../../services/user.service";
import '../../../styles/form.css'

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
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        if (e.target.name === 'roles') {
            const roles = value ? ['ROLE_ADMIN'] : ['ROLE_USER'];
            setUser({
                ...user,
                roles: roles,
            });
        } else {
            setUser({
                ...user,
                [e.target.name]: value,
            });
        }
    };
    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        userService.updateUser(user)
            .then(res => {
                alert("Modification effectuée avec succès")
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    // Récupération de l'utilisateur à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            userService.getUser(uid)
                .then(res => {

                    setUser(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true

    }, [])


    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="card-header">
                    <h1>Modifier un utilisateur</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" value={user.name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Nom de famille</label>
                    <input type="text" name="lastname" value={user.lastname} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="login">Email</label>
                    <input type="text" name="email" value={user.email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="roles"
                            checked={user.roles && user.roles.includes('ROLE_ADMIN')}
                            onChange={onChange}
                        />
                        Administrateur
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="roles"
                            checked={user.roles && user.roles.includes('ROLE_USER')}
                            onChange={onChange}
                        />
                        Utilisateur
                    </label>
                </div>
                <div className="form-group">
                    <button className="add-button">Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;