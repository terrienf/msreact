import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {clientService} from "../../../services/client.service";
import '../../../styles/form.css'
import {infoService} from "../../../services/info.service";
import infos from "../../User/Infos";


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
        e.preventDefault();

        Promise.all([
            clientService.updateClient(cid, client),
            infoService.updateInfo(cid, client.infos)
        ])
            .then((results) => {
                // Résultats de la mise à jour du client et des infos du client
                const clientResult = results[0];
                const infoResult = results[1];

                // Traitez les résultats comme vous le souhaitez
                console.log(clientResult);
                console.log(infoResult);

                navigate('../index');
            })
            .catch(err => console.log(err));
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
                    <label htmlFor="protocole">Protocole</label>
                    <input type="text" name="protocole" value={infos.protocole} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="ipAdress">Adresse IP</label>
                    <input type="text" name="ipAdress" value={infos.ipAdress} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="version">Version</label>
                    <input type="text" name="version" value={infos.version} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="port">Port</label>
                    <input type="text" name="port" value={infos.port} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="updateAt">Mise à jour</label>
                    <input type="date" name="updateAt" value={infos.updateAt} onChange={onChange} />
                </div>
                <div className="form-group">
                    <button className="add-button">Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default ClientEdit;