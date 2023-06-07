import React, {useEffect, useRef, useState} from "react";
import {clientService} from "../../../services/client.service";
import {Link} from "react-router-dom";

const User = () => {
    const [clients, setClients] = useState([])
    const flag = useRef(false)



// Récupération de la liste des clients à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            clientService.getAllClients()
                .then(res => {
                    console.log(res.data)
                    // Liste dans le state
                    setClients(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])

    const delClient = (clientId) => {
        clientService.deleteClient(clientId)
            .then(res => {
                console.log(res)
                setClients((current => current.filter(client => client.id !== clientId)))
            })
    }

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
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.code}</td>
                            <td>{client.idClient}</td>
                            <td>
                                <Link to={`/admin/client/clientEdit/${client.id}`}>
                                    <button className="edit_ClientButton">Modifier</button>
                                </Link>
                            </td>
                            <td><button className="del_clientButton" onClick={() => delClient(client.id)}>Supprimer</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default User;