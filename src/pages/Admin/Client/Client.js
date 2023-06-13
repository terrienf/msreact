import React, {useEffect, useRef, useState} from "react";
import {clientService} from "../../../services/client.service";
import {Link} from "react-router-dom";
import '../../../styles/list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'


const trash = <FontAwesomeIcon icon={faTrash} />
const modify = <FontAwesomeIcon icon={faClipboard} />


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
    <div className="list">
        {clients.map(client => (
            <main className="leaderboard__profiles" key={client.id} title="Afficher les infos">
                <article className="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profil" className="leaderboard__picture" />
                    <span className="leaderboard__name">{client.name} {client.lastname}</span>
                    <span className="leaderboard__mail">{client.email}</span>
                    <div className="group-button">
                        <Link to={`/admin/client/clientEdit/${client.id}`}>
                            <button className="UserButton" title="Modifier">{modify}</button>
                        </Link>
                        <button className="UserButton" onClick={() => delClient(client.id)} title="Supprimer">{trash}</button>
                    </div>
                </article>
            </main>
        ))}

    </div>
    );
};

export default User;