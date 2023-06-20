import React, {useEffect, useRef, useState} from "react";
import {clientService} from "../../../services/client.service";
import {Link} from "react-router-dom";
import '../../../styles/test.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faClipboard, faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import {
    sortClientsByName,
    sortClientsByCode,
    sortClientsById,
    sortClientsByIPAdresses,
    sortClientsByVersions,
    sortClientsByPorts,
    sortClientsByUpdateAts
} from "../../../services/tri.service";

const sortIcon = <FontAwesomeIcon icon={faSort}/>;
const addIcon = <FontAwesomeIcon icon={faPlus}/>;
const trashIcon = <FontAwesomeIcon icon={faTrash}/>;
const modifyIcon = <FontAwesomeIcon icon={faClipboard}/>;

const Client = () => {
    const [clients, setClients] = useState([]);
    const flag = useRef(false);
    const [sortDirection, setSortDirection] = useState("asc");

    useEffect(() => {
        if (flag.current === false) {
            clientService.getAllClients()
                .then(res => {
                    console.log(res.data);
                    setClients(res.data);
                })
                .catch(err => console.log(err));
        }
        return () => (flag.current = true);
    }, []);

    const delClient = (clientId) => {
        clientService.deleteClient(clientId)
            .then(res => {
                console.log(res);
                setClients((current) => current.filter(client => client.id !== clientId));
            });
    };

    const sortClients = () => {
        const sortedClients = [...clients].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        if (sortDirection === "desc") {
            sortedClients.reverse();
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }
        setClients(sortedClients);
    };

        const sortCodes = () => {
            const sortedCodes = [...clients].sort((a, b) =>
                a.code.localeCompare(b.code)
            );
            if (sortDirection === "desc") {
                sortedCodes.reverse();
                setSortDirection("asc");
            } else {
                setSortDirection("desc");
            }
            setClients(sortedCodes);
        };

        const sortIdClients = () => {
            const sortedIdClients = [...clients].sort((a, b) =>
                a.idClient.localeCompare(b.idClient)
            );
            if (sortDirection === "desc") {
                sortedIdClients.reverse();
                setSortDirection("asc");
            } else {
                setSortDirection("desc");
            }
            setClients(sortedIdClients);
        };

        const sortIPAdresses = () => {
            const sortedClients = [...clients].sort((a, b) => {
                const ipA = a.infos && a.infos.length > 0 ? a.infos[0].ipAdress : "";
                const ipB = b.infos && b.infos.length > 0 ? b.infos[0].ipAdress : "";

                if (typeof ipA === "string" && typeof ipB === "string") {
                    return ipA.localeCompare(ipB);
                } else {
                    return 0; // Aucun tri si les valeurs ne sont pas des chaînes de caractères
                }
            });

            if (sortDirection === "desc") {
                sortedClients.reverse();
                setSortDirection("asc");
            } else {
                setSortDirection("desc");
            }

            setClients(sortedClients);
        };

        const sortVersions = () => {
            const sortedClients = [...clients].sort((a, b) => {
                const versionA = a.infos && a.infos.length > 0 ? a.infos[0].version : "";
                const versionAB = b.infos && b.infos.length > 0 ? b.infos[0].version : "";

                if (typeof versionA === "string" && typeof versionAB === "string") {
                    return versionA.localeCompare(versionAB);
                } else {
                    return 0; // Aucun tri si les valeurs ne sont pas des chaînes de caractères
                }
            });

            if (sortDirection === "desc") {
                sortedClients.reverse();
                setSortDirection("asc");
            } else {
                setSortDirection("desc");
            }
            setClients(sortedClients);
        };

        const sortPorts = () => {
            const sortedClients = [...clients].sort((a, b) => {
                const portA = a.infos && a.infos.length > 0 ? a.infos[0].port : "";
                const portB = b.infos && b.infos.length > 0 ? b.infos[0].port : "";

                if (typeof portA === "string" && typeof portB === "string") {
                    return portA.localeCompare(portB);
                } else {
                    return 0; // Aucun tri si les valeurs ne sont pas des chaînes de caractères
                }
            });

            if (sortDirection === "desc") {
                sortedClients.reverse();
                setSortDirection("asc");
            } else {
                setSortDirection("desc");
            }
            setClients(sortedClients);
        };

        const sortUpdateAts = () => {
            const sortedClients = [...clients].sort((a, b) => {
                const UpdateAtA = a.infos && a.infos.length > 0 ? a.infos[0].updateAt : "";
                const UpdateAtB = b.infos && b.infos.length > 0 ? b.infos[0].UpdateAt : "";

                if (typeof UpdateAtA === "string" && typeof UpdateAtB === "string") {
                    return UpdateAtA.localeCompare(UpdateAtB);
                } else {
                    return 0; // Aucun tri si les valeurs ne sont pas des chaînes de caractères
                }
            });

            if (sortDirection === "desc") {
                sortedClients.reverse();
                setSortDirection("asc");
            } else {
                setSortDirection("desc");
            }
            setClients(sortedClients);
        };
        return (
    <div>
        <div className="ListClient">
            <div className="client-header">
                <div className="category" onClick={sortClients}>Clients {sortIcon}</div>
                <div className="category" onClick={sortCodes}>Code {sortIcon}</div>
                <div className="category" onClick={sortIdClients}>IdClient {sortIcon}</div>
                <div className="category">Protocole {sortIcon}</div>
                <div className="category" onClick={sortIPAdresses}>Adresse IP {sortIcon}</div>
                <div className="category" onClick={sortVersions}>Version {sortIcon}</div>
                <div className="category" onClick={sortPorts}>Port {sortIcon}</div>
                <div className="category" onClick={sortUpdateAts}>Mise à jour {sortIcon}</div>
                <div></div>
                <div></div>
            </div>
            {clients.map(client => (
                <div className="client-row" key={client.id}>
                    <div className="client-cell">{client.name}</div>
                    <div className="client-cell">{client.code}</div>
                    <div className="client-cell">{client.idClient}</div>
                    {client.infos && client.infos.length > 0 ? (
                        client.infos.map((info) => (
                            <React.Fragment key={info.id}>
                                <div className="client-cell">{info.protocole ? 'HTTP' : 'HTTPS'}</div>
                                <div className="client-cell">{info.ipAdress}</div>
                                <div className="client-cell">{info.version}</div>
                                <div className="client-cell">{info.port}</div>
                                <div className="client-cell">{info.updateAt}</div>
                                <Link to={`/admin/client/clientEdit/${client.id}`}>
                                    <button className="UserButton" title="Modifier">{modifyIcon}</button>
                                </Link>
                                <div>
                                    <button className="UserButton" onClick={() => delClient(client.id)}
                                            title="Supprimer">{trashIcon}</button>
                                </div>
                            </React.Fragment>
                        ))
                    ) : (
                        <React.Fragment>
                            <div className="client-cell">-</div>
                            <div className="client-cell">-</div>
                            <div className="client-cell">-</div>
                            <div className="client-cell">-</div>
                            <div className="client-cell">-</div>
                            <Link to={`/admin/info/infoAdd`}>
                                <button className="UserButton" title="Ajouter des infos">{addIcon}</button>
                            </Link>
                            <div>
                                <button className="UserButton" onClick={() => delClient(client.id)}
                                        title="Supprimer">{trashIcon}</button>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            ))}
        </div>
    </div>
);
}
;

export default Client;
