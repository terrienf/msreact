import React, {useEffect, useState} from 'react';
import {clientService} from "../../services/client.service";
import {Link, useParams} from "react-router-dom";

const Infos = () => {
    const [client, setClient] = useState({})
    let {cid} = useParams()

    useEffect(() => {
        clientService.getClient(cid)
            .then(res => {
                console.log(res.data)
                setClient(res.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <ul>
                <li>{client.name}</li>
                <li>{client.idClient}</li>
                <li>{client.code}</li>
                <li>
                    {client.infos && client.infos.length > 0 ? (
                        <ul>
                            {client.infos.map((info) => (
                                <li key={info.id}>
                                    <ul>
                                        <li>Version: {info.version}</li>
                                        <li>IP: {info.ipAdress}</li>
                                        <li>Protocole: {info.protocole ? 'HTTP' : 'HTTPS'}</li>
                                        <li>Port: {info.port}</li>
                                        <li>Dernière utilisation : {info.updateAt}</li>
                                    </ul>
                                        <td>
                                            <Link to={`/admin/info/infoEdit/${info.id}`}>
                                                <button className="edit_infoButton">Modifier les infos</button>
                                            </Link>
                                        </td>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <li>
                            <Link to={`/admin/info/infoAdd`}>
                                <button className="add_infoButton">Ajouter des infos</button>
                            </Link>
                        </li>
                    )}
                </li>
            </ul>
        </div>
    )

};

export default Infos;