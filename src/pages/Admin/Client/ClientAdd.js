import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {clientService} from "../../../services/client.service";

const ClientAdd = () => {
    const [client, setClient] = useState([])
    let navigate = useNavigate()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
        e.preventDefault()
    }

    // Gestion de la soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(client)
        clientService.addClient(client)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="clientAdd">
            client Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={onChange}/>
                </div>

                <div className="group">
                    <label htmlFor="code">Code</label>
                    <input type="text" name="code" onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="id_client">id_client</label>
                    <input type="text" name="id_client" onChange={onChange}/>
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default ClientAdd;