import React, {useEffect, useState} from "react";
import axios from "axios";

function Infos() {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        const fetchInfos = async () => {
            const {data} = await axios.get("http://127.0.0.1:8000/api/infos_clients");
            console.log(data['hydra:member'])
            setInfos(data['hydra:member']);
        };
        fetchInfos();
    }, []);

    return (
        <div className="Infos">
            <h2>Informations clients :</h2>
            <table>
                <thead>
                <tr>
                    <th>Client ID</th>
                    <th>Version</th>
                    <th>Adresse IP</th>
                    <th>Protocole</th>
                    <th>Port</th>
                    <th>Dernière utilisation</th>
                </tr>
                </thead>
                <tbody>
                {infos.map((item, index) => (
                    <tr key={index}>
                        <td>{item.clientId}</td>
                        <td>{item.version}</td>
                        <td>{item.ipAdress}</td>
                        <td>{item.protocole ? "HTTPS" : "HTTP"}</td>
                        <td>{item.port}</td>
                        <td>{item.updateAt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Infos;
