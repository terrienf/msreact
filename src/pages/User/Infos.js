import React, {useEffect, useState} from 'react';
import {clientService} from "../../services/client.service";
import {Link, useParams} from "react-router-dom";
import '../../styles/test.css'

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
        // <div>
        //     <ul>
        //         <li>{client.name}</li>
        //         <li>{client.idClient}</li>
        //         <li>{client.code}</li>
        //         <li>
        //             {client.infos && client.infos.length > 0 ? (
        //                 <ul>
        //                     {client.infos.map((info) => (
        //                         <li key={info.id}>
        //                             <ul>
        //                                 <li>Version: {info.version}</li>
        //                                 <li>IP: {info.ipAdress}</li>
        //                                 <li>Protocole: {info.protocole ? 'HTTP' : 'HTTPS'}</li>
        //                                 <li>Port: {info.port}</li>
        //                                 <li>Dernière utilisation : {info.updateAt}</li>
        //                             </ul>
        //                                 <td>
        //                                     <Link to={`/admin/info/infoEdit/${info.id}`}>
        //                                         <button className="edit_infoButton">Modifier les infos</button>
        //                                     </Link>
        //                                 </td>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             ) : (
        //                 <li>
        //                     <Link to={`/admin/info/infoAdd`}>
        //                         <button className="add_infoButton">Ajouter des infos</button>
        //                     </Link>
        //                 </li>
        //             )}
        //         </li>
        //     </ul>
        // </div>
        <div>
            <div className="products-area-wrapper tableView">
                <div className="products-header">
                    <div className="product-cell image">
                        Clients
                    </div>
                    <div className="product-cell category">Code</div>
                    <div className="product-cell status-cell">IdClient</div>
                    <div className="product-cell sales">Version</div>
                    <div className="product-cell stock">Adresse IP</div>
                    <div className="product-cell price">Protocole</div>
                    <div className="product-cell price">Port</div>
                    <div className="product-cell price">Mise à jour</div>
                </div>

                {client.infos && client.infos.length > 0 && (
                    client.infos.map((info) => (
                        <div className="products-row">
                            <div className="product-cell image">
                                {/*<img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product" />*/}
                                <span>{client.name}</span>
                            </div>
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

    )

                                    };

                                        export default Infos;