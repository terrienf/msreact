import React, {useEffect, useRef, useState} from 'react';
import {userService} from "../../../services/user.service";
import '../../../styles/list.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const add = <FontAwesomeIcon icon={faPlus}/>
const trash = <FontAwesomeIcon icon={faTrash}/>
const modify = <FontAwesomeIcon icon={faClipboard}/>


//Le UseEffect est en double, puisque qu'il se positionne à cheval avec (Mount, Update, Unmount) il va se déclencher 2 fois, donc fait 2 fois son appel à l'API
// avec useRef (effet de nettoyage) avec une fonction flag qui empeche le double appel
const User = () => {

    // let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const flag = useRef(false)

    useEffect(() => {

        if (flag.current === false) {
            userService.getAllUsers()
                .then(res => {
                    console.log(res.data)
                    setUsers(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])

    const delUser = (userId) => {
        console.log(userId)
        userService.deleteUser(userId)
            .then(res => {
                setUsers((current) => current.filter(user => user.id !== userId))
            })
            .catch(err => console.log(err))
    }

    return (

        <div>
            <div className="ListClient">
                <div className="user-header">
                    <div className="category">Nom</div>
                    <div className="category">Prénom</div>
                    <div className="category">Email</div>
                    <div className="category">Rôle</div>
                    <div></div>
                    <div></div>
                </div>
                {users.map(user => (
                    <div className="user-row">
                        <div className="user-cell">{user.name}</div>
                        <div className="user-cell">{user.lastname}</div>
                        <div className="user-cell">{user.email}</div>
                        <div className="user-cell">
                            {user.roles.includes('ROLE_ADMIN') ? 'Administrateur' : user.roles.includes('ROLE_USER') ? 'User' : ''}
                        </div>
                        <React.Fragment>
                            <Link to={`/admin/user/userEdit/${user.id}`}>
                                <button className="UserButton" title="Modifier">{modify}</button>
                            </Link>
                            <div>
                                <button className="UserButton" onClick={() => delUser(user.id)}
                                        title="Supprimer">{trash}</button>
                            </div>
                        </React.Fragment>

                    </div>
                ))}
            </div>
        </div>


    );
};

export default User;