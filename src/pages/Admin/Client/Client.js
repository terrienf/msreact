import React, { useEffect, useRef, useState } from "react";
import { clientService } from "../../../services/client.service";
import { Link } from "react-router-dom";
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

const sortIcon = <FontAwesomeIcon icon={faSort} />;
const addIcon = <FontAwesomeIcon icon={faPlus} />;
const trashIcon = <FontAwesomeIcon icon={faTrash} />;
const modifyIcon = <FontAwesomeIcon icon={faClipboard} />;

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
        const sortedClients = sortClientsByName(clients, sortDirection);

        if (sortDirection === "desc") {
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }

        setClients(sortedClients);
    };

    const sortCodes = () => {
        const sortedClients = sortClientsByCode(clients, sortDirection);

        if (sortDirection === "desc") {
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }

        setClients(sortedClients);
    };

    const sortIdClients = () => {
        const sortedClients = sortClientsById(clients, sortDirection);

        if (sortDirection === "desc") {
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }

        setClients(sortedClients);
    };

    const sortIPAdresses = () => {
        const sortedClients = sortClientsByIPAdresses(clients, sortDirection);

        if (sortDirection === "desc") {
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }

        setClients(sortedClients);
    };

    const sortVersions = () => {
        const sortedClients = sortClientsByVersions(clients, sortDirection);

        if (sortDirection === "desc") {
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }

        setClients(sortedClients);
    };

    const sortPorts = () => {
        const sortedClients = sortClientsByPorts(clients, sortDirection);

        if (sortDirection === "desc") {
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }

        setClients(sortedClients);
    };

    const sortUpdateAts = () => {
        const sortedClients = sortClientsByUpdateAts(clients, sortDirection);

        if (sortDirection === "desc") {
            setSortDirection("asc");
        } else {
            setSortDirection("desc");
        }

        setClients(sortedClients);
    };

    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                    <th onClick={sortClients} style={{ cursor: "pointer" }}>
                        Nom {sortIcon}
                    </th>
                    <th onClick={sortCodes} style={{ cursor: "pointer" }}>
                        Code {sortIcon}
                    </th>
                    <th onClick={sortIdClients} style={{ cursor: "pointer" }}>
                        ID {sortIcon}
                    </th>
                    <th onClick={sortIPAdresses} style={{ cursor: "pointer" }}>
                        Adresses IP {sortIcon}
                    </th>
                    <th onClick={sortVersions} style={{ cursor: "pointer" }}>
                        Versions {sortIcon}
                    </th>
                    <th onClick={sortPorts} style={{ cursor: "pointer" }}>
                        Ports {sortIcon}
                    </th>
                    <th onClick={sortUpdateAts} style={{ cursor: "pointer" }}>
                        Date de mise à jour {sortIcon}
                    </th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.code}</td>
                        <td>{client.idClient}</td>
                        <td>
                            {client.infos && client.infos.length > 0
                                ? client.infos[0].ipAdress
                                : ""}
                        </td>
                        <td>
                            {client.infos && client.infos.length > 0
                                ? client.infos[0].version
                                : ""}
                        </td>
                        <td>
                            {client.infos && client.infos.length > 0
                                ? client.infos[0].port
                                : ""}
                        </td>
                        <td>
                            {client.infos && client.infos.length > 0
                                ? client.infos[0].updateAt
                                : ""}
                        </td>
                        <td>
                            <Link
                                to={`/client/modify/${client.id}`}
                                className="btn btn-primary btn-sm"
                            >
                                {modifyIcon} Modifier
                            </Link>
                            <button
                                onClick={() => delClient(client.id)}
                                className="btn btn-danger btn-sm"
                            >
                                {trashIcon} Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/client/add" className="btn btn-primary btn-lg">
                {addIcon} Ajouter un client
            </Link>
        </div>
    );
};

export default Client;
