import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {clientService} from "../../../services/client.service";
import '../../../styles/form.css'


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
                    // alert("Modification effectuée avec succès")
                    setClient(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])


    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="card-header">
                    <h1>Modifier un client</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={client.name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="code">Code</label>
                    <input type="text" name="code" value={client.code} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="id_client">id_client</label>
                    <input type="text" name="idClient" value={client.idClient} onChange={onChange} />
                </div>
                <div className="form-group">
                    <button className="add-button">Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default ClientEdit;