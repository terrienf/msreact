import React, {useEffect, useRef, useState} from "react";
import {clientService} from "../../../services/client.service";

const User = () => {
    const [clients, setClients] = useState([])


// Récupération de la liste des clients à l'affichage
    useEffect(() => {
            clientService.getAllClients()
                .then(res => {
                    console.log(res.data)
                    // Liste dans le state
                    setClients(res.data)
                })
                .catch(err => console.log(err))
        },[])

    return (
        <div className="client">
            liste client
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>code</th>
                    <th>idClient</th>
                </tr>
                </thead>

                <tbody>
                {
                    clients.map(client => (
                        <tr>
                            <td>{client.name}</td>
                            <td>{client.code}</td>
                            <td>{client.idClient}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default User;