import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {clientService} from "../../../services/client.service";
import {log} from "@craco/craco/dist/lib/logger";

const ClientEdit = () => {
    const [client, setClient] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    //useParams : permet de récupérer le paramètre qui se trouve dans l'URL, l'ID utilisateur
    const {cid} = useParams()

    //Modification dans le formulaire
    const onChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        });
    };

    //Envoi du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        clientService.updateClient(client)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (flag.current === false) {
            clientService.getClient(cid)
                .then(res => {
                    console.log(res.data)
                    setClient(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])


    return (
        <div className="clientEdit">
            client Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={client.name} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="code">Code</label>
                    <input type="text" name="code" value={client.code} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="id_client">id_client</label>
                    <input type="text" name="idClient" value={client.idClient} onChange={onChange} />
                </div>
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default ClientEdit;