import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from "../../../services/user.service";

const UserAdd = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        roles: ['ROLE_USER'],
    });
    const navigate = useNavigate();

    // Gestion de la modification des champs du formulaire
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

    // Gestion de la soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        userService.addUser(user)
            .then(res => {
                console.log(res);
                navigate('/admin/user/index', { replace: true });
            })
            .catch(err => console.log(err));
    };

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
                    <label>
                        <input
                            type="checkbox"
                            name="roles"
                            checked={user.roles.includes('ROLE_ADMIN')}
                            onChange={onChange}
                        />
                        Administrateur
                    </label>
                </div>

                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default UserAdd;
