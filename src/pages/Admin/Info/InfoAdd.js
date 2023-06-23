import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {infoService} from "../../../services/info.service";
import '../../../styles/form.css'


const InfoAdd = () => {
    const [info, setInfo] = useState({});

    const navigate = useNavigate();

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        const { name, checked } = e.target;

        setInfo({
            ...info,
            [e.target.name]: e.target.value,
            protocole: name === 'http' ? !checked : checked,
        });
    };

    // Gestion de la soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
        infoService
            .addInfo(info)
            .then((res) => navigate('../../client/index'))
            .catch((err) => console.log(err));
    };

    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="card-header">
                    <h1>Ajouter Informations</h1>
                </div>
                <div className="card-body">
                    <div className="form-group"></div>
                    <label htmlFor="version">Version</label>
                    <input type="text" name="version" onChange={onChange} />
                <div className="form-group">
                    <label htmlFor="ipAdress">ipAdress</label>
                    <input type="text" name="ipAdress" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="port">Port</label>
                    <input type="text" name="port" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="http"
                            checked={!info.protocole}
                            onChange={onChange}
                        />
                        HTTP
                        <input
                            type="checkbox"
                            name="https"
                            checked={info.protocole}
                            onChange={onChange}
                        />
                        HTTPS
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="updateAt">Mise à jour le : </label>
                    <input type="date" name="updateAt" onChange={onChange} />
                </div>
                </div>
                {/*{JSON.stringify(info)}*/}
                <div className="form-group">
                    <button className="add-button">Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default InfoAdd;