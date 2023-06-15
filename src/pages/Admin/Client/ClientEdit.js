import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {clientService} from "../../../services/client.service";
import '../../../styles/form.css'
import {infoService} from "../../../services/info.service";


const ClientEdit = () => {
    const [client, setClient] = useState([])
    const [infos, setInfos] = useState({});
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

    const onInfoChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === "radio" && name === "protocole" && checked) {
            setInfos({
                ...infos,
                protocole: value === "http",
            });
        } else {
            setInfos({
                ...infos,
                [name]: value,
            });
        }
    };

    //Envoi du formulaire
    const onSubmit = (e) => {
        //Empeche le rechargement de la page
        e.preventDefault();

        //Appel des 2 services en même temps
        Promise.all([
            clientService.updateClient(cid, client),
            infoService.updateInfo(client.infos[0].id, infos)
        ])
        //si succès de l'appel des 2 services alors affichage des résultats dans la console
            .then((results) => {
                const clientResult = results[0];
                const infoResult = results[1];

                console.log(clientResult);
                console.log(infoResult);
        //puis affichage de la page /index
                navigate('../index');
            })
        //Affichage de l'erreur dans la console
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if (flag.current === false) {
            clientService.getClient(cid)
                .then(clientRes => {
                    const clientData = clientRes.data;
                    const infoId = clientData.infos[0].id;
                    setClient(clientData);
                    setInfos({...clientData.infos[0], id: infoId});

                })
                .catch(err => console.log(err));
        }
        return () => {
            flag.current = true;
        };
    }, []);


    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="card-header">
                    <h1>Modifier un client</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={client.name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="code">Code</label>
                    <input type="text" name="code" value={client.code} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="id_client">id_client</label>
                    <input type="text" name="idClient" value={client.idClient} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="radio"
                            name="protocole"
                            value="http"
                            checked={infos.protocole === true}
                            onChange={onInfoChange}
                        />
                        HTTP
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="protocole"
                            value="https"
                            checked={infos.protocole === false}
                            onChange={onInfoChange}
                        />
                        HTTPS
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="ipAdress">Adresse IP</label>
                    <input type="text" name="ipAdress" value={infos.ipAdress || ''} onChange={onInfoChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="version">Version</label>
                    <input type="text" name="version" value={infos.version || ''} onChange={onInfoChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="port">Port</label>
                    <input type="text" name="port" value={infos.port || ''} onChange={onInfoChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="updateAt">Mise à jour</label>
                    <input type="datetime-local" name="updateAt" value={infos.updateAt || ''} onChange={onInfoChange}/>
                </div>
                <div className="form-group">
                    <button className="add-button">Modifier</button>
                </div>
                {JSON.stringify(infos)}
            </form>
        </div>
    );
};

export default ClientEdit;