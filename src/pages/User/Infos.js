import React, {useEffect, useState} from 'react';
import {clientService} from "../../services/client.service";
import {useParams} from "react-router-dom";

const Infos = () => {
    const [client, setClient] = useState({})
    let {cid} = useParams()

    useEffect(() => {
        clientService.getClient(cid)
            .then(res => setClient(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <ul>
                <li>{client.name}</li>
                <li>{client.idClient}</li>
                <li>{client.code}</li>
                <li>{client.info}</li>
            </ul>
        </div>
    );
};

export default Infos;