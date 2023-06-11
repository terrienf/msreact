import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {infoService} from "../../../services/info.service";

const InfoAdd = () => {
    const [info, setInfo] = useState([])
    let navigate = useNavigate()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
        e.preventDefault()
    }

    // Gestion de la soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(info)
        infoService.addInfo(info)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="infoAdd">
            info Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="version">Version</label>
                    <input type="text" name="version" onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="ipAdress">ipAdress</label>
                    <input type="text" name="ipAdress" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="protocole">protocole</label>
                    <input type="text" name="protocole" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default InfoAdd;