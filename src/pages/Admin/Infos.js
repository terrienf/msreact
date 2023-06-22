import React, { useEffect, useState } from 'react';
import { clientService } from "../../services/client.service";
import { useParams } from "react-router-dom";
import '../../styles/form2.css';
import dayjs from "dayjs";
import 'dayjs/locale/fr';

const Infos = () => {
    const [client, setClient] = useState({});
    let { cid } = useParams();

    useEffect(() => {
        clientService.getClient(cid)
            .then(res => {
                console.log(res.data);
                setClient(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="form2">
            <div className="card-header">
                <h1>{client.name}</h1>
            </div>
            <div className="form2-group">
                <label>Code:</label>
                <span>{client.code}</span>
            </div>
            <div className="form2-group">
                <label>Id Client:</label>
                <span>{client.idClient}</span>
            </div>
            {client.infos && client.infos.length > 0 ? (
                client.infos.map((info) => (
                    <React.Fragment key={info.id}>
                        <div className="form2-group">
                            <label>Version:</label>
                            <span>{info.version}</span>
                        </div>
                        <div className="form2-group">
                            <label>Adresse IP:</label>
                            <span>{info.ipAdress}</span>
                        </div>
                        <div className="form2-group">
                            <label>Protocole:</label>
                            <span>HTTP</span>
                        </div>
                        <div className="form2-group">
                            <label>Port:</label>
                            <span>{info.port}</span>
                        </div>
                        <div className="form2-group">
                            <label>Mise à jour:</label>
                            <span>{dayjs(info.updateAt).locale('fr').subtract(2, "hours").format("D MMMM YYYY à HH:mm")}</span>
                        </div>
                    </React.Fragment>
                ))
            ) : (
                <div className="form2-group">
                    <label className="info-label">Aucune information disponible</label>
                </div>
            )}
        </div>
    );
}

export default Infos;
