import React, {useEffect, useRef, useState} from "react";
import {clientService} from "../../../services/client.service";
import {Link, useParams} from "react-router-dom";
import '../../../styles/test.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const add = <FontAwesomeIcon icon={faPlus} />
const trash = <FontAwesomeIcon icon={faTrash}/>
const modify = <FontAwesomeIcon icon={faClipboard}/>


const User = () => {
    const [clients, setClients] = useState([])
    const flag = useRef(false)
    const [client, setClient] = useState({})
    let {cid} = useParams()


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
        <div>
            <div className="ListClient">
                <div className="client-header">
                    <div className="category">Clients</div>
                    <div className="category">Code</div>
                    <div className="category">IdClient</div>
                    <div className="category">Protocole</div>
                    <div className="category">Adresse IP</div>
                    <div className="category">Version</div>
                    <div className="category">Port</div>
                    <div className="category">Mise à jour</div>
                    <div></div>
                    <div></div>
                </div>
                {clients.map(client => (
                    <div className="client-row">
                        <div className="client-cell">{client.name}</div>
                        <div className="client-cell">{client.code}</div>
                        <div className="client-cell">{client.idClient}</div>
                        {client.infos && client.infos.length > 0 ? (
                            client.infos.map((info) => (
                                <React.Fragment key={info.id}>
                                    <div className="client-cell">{info.protocole ? 'HTTP' : 'HTTPS'}</div>
                                    <div className="client-cell">{info.ipAdress}</div>
                                    <div className="client-cell">{info.version}</div>
                                    <div className="client-cell">{info.port}</div>
                                    <div className="client-cell">{info.updateAt}</div>

                                        <Link to={`/admin/client/clientEdit/${client.id}`}>
                                            <button className="UserButton" title="Modifier">{modify}</button>
                                        </Link>
                                    <div>
                                        <button className="UserButton" onClick={() => delClient(client.id)}
                                                title="Supprimer">{trash}</button>
                                    </div>
                                </React.Fragment>
                            ))
                        ) : (
                            <React.Fragment>
                                <div className="product-cell">-</div>
                                <div className="product-cell">-</div>
                                <div className="product-cell">-</div>
                                <div className="product-cell">-</div>
                                <div className="product-cell">-</div>
                                <Link to={`/admin/info/infoAdd`}>
                                    <button className="UserButton" title="Ajouter des infos">{add}</button>
                                </Link>
                            </React.Fragment>
                        )}
                    </div>
                ))}
            </div>
        </div>


    );
};

export default User;