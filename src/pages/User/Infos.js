import React, { useEffect, useState } from 'react';
import { clientService } from "../../services/client.service";
import { useParams } from "react-router-dom";
import '../../styles/test.css'

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
        <div>
            <div className="products-area-wrapper tableView">
                <div className="products-header">
                    {client.infos && client.infos.length > 0 && (
                        client.infos.map((info) => (
                            <div className="products-row" key={info.id}>
                                <div className="product-cell sales"><span className="cell-label">Client:</span>{client.name}</div>
                                <div className="product-cell sales"><span className="cell-label">Code:</span>{client.code}</div>
                                <div className="product-cell sales"><span className="cell-label">Id Client:</span>{client.idClient}</div>
                                <div className="product-cell sales"><span className="cell-label">Version:</span>{info.version}</div>
                                <div className="product-cell stock"><span className="cell-label">Adresse IP:</span>{info.ipAdress}</div>
                                <div className="product-cell status-cell">
                                    <span className="cell-label">Protocole:</span>
                                    <span className="status active">HTTP</span>
                                </div>
                                <div className="product-cell price"><span className="cell-label">Port:</span>{info.port}</div>
                                <div className="product-cell price"><span className="cell-label">Mise à jour:</span>{info.updateAt}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Infos;
