import React, {useEffect, useRef, useState} from 'react';
import {userService} from "../../../services/user.service";
import '../../../styles/list.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'


const trash = <FontAwesomeIcon icon={faTrash} />
const modify = <FontAwesomeIcon icon={faClipboard} />


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

            <div className="list">
                {users.map(user => (
                    <main className="leaderboard__profiles" key={user.id}>
                        <article className="leaderboard__profile">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profil" className="leaderboard__picture" />
                            <span className="leaderboard__name">{user.name} {user.lastname}</span>
                            <span className="leaderboard__mail">{user.email}</span>
                            <div className="group-button">
                            <Link to={`/admin/user/userEdit/${user.id}`}>
                                <button className="UserButton" title="Modifier">{modify}</button>
                            </Link>
                            <button className="UserButton" onClick={() => delUser(user.id)} title="Supprimer">{trash}</button>
                            </div>
                        </article>
                    </main>
                ))}

            </div>

    );
};

export default User;