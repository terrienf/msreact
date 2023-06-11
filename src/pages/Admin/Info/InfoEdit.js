import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {infoService} from "../../../services/info.service";


const InfoEdit = () => {
    const [info, setInfo] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    //useParams : permet de récupérer le paramètre qui se trouve dans l'URL, l'ID utilisateur
    const {iid} = useParams()

    //Modification dans le formulaire
    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    };

    //Envoi du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        infoService.updateInfo(info)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (flag.current === false) {
            infoService.getInfo(iid)
                .then(res => {
                    console.log(res.data)
                    setInfo(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])


    return (
        <div className="infoEdit">
            info Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="version">Version</label>
                    <input type="text" name="version" value={info.version} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="ipAdress">Code</label>
                    <input type="text" name="ipAdress" value={info.ipAdress} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="protocole">protocole</label>
                    <input type="text" name="protocole" value={info.protocole} onChange={onChange} />
                </div>
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default InfoEdit;