import {useEffect, useState} from "react";
import {getClients} from "../../api/ApiClient";
import '../../styles/ListeClient.css'
import Header from "../../Component/user/Header";

function Clients() {
    const [clients, setClients] = useState([]);

    useEffect(()=> {
        async function getClientsLoad(){
            const response = await getClients();
            const clientsData = response.results;
            setClients(clientsData);
        }
        getClientsLoad();
    },[])

    return (
        <div className="ms-client">

            <h1>Liste des clients</h1>
            <ul className="ms-client-list">
                {clients.map(({name, id})=>(
                    <li key={id} className="ms-client-item">{name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Clients;
