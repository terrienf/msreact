import React, {useEffect, useRef, useState} from 'react';
import {userService} from "../../../services/user.service";
import {Link} from "react-router-dom";


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
        <div className="user">
            liste user
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>email</th>
                    {/*<th>username</th>*/}
                </tr>
                </thead>

                <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.roles}</td>
                            {/*<td>{user.username}</td>*/}
                            <td>
                                <Link to={`/admin/user/userEdit/${user.id}`}>
                                    <button className="edit_UserButton">Modifier</button>
                                </Link>
                            </td>
                            <td><button className="del_UserButton" onClick={() => delUser(user.id)}>Supprimer</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default User;