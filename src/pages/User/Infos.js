import React, {useEffect, useState} from 'react';
import {clientService} from "../../services/client.service";
import {useParams} from "react-router-dom";

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
                    {client.infos ? (
                        <ul>
                            {client.infos.map((info) => (
                                <li key={info.id}>
                                    Version: {info.version}, IP: {info.ipAdress}, Protocole: {info.protocole ? 'HTTP' : 'HTTPS'}, Port: {info.port}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucune information disponible.</p>
                    )}
                </li>
            </ul>
        </div>


    );
};

export default Infos;