import React, {useEffect, useState} from 'react';
import {userService} from "../../../services/user.service";


const User = () => {
    // let navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="user">
            liste user
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>email</th>
                    <th>username</th>
                </tr>
                </thead>

                <tbody>
                {
                    users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default User;