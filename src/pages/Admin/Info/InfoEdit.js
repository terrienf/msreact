import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {infoService} from "../../../services/info.service";
import '../../../styles/form.css'


const InfoEdit = () => {
    const [info, setInfo] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    //useParams : permet de récupérer le paramètre qui se trouve dans l'URL, l'ID utilisateur
    const {iid} = useParams()

    //Modification dans le formulaire
    const onChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'http' || name === 'https') {
            setInfo((prevInfo) => ({
                ...prevInfo,
                protocole: name === 'http' ? !checked : checked,
            }));
        } else {
            setInfo((prevInfo) => ({
                ...prevInfo,
                [name]: e.target.value,
            }));
        }
    };


    //Envoi du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        infoService.updateInfo(info)
            .then(res => {
                console.log(info)
                alert("Modification effectuée avec succès")
                navigate('../../dashboard')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (flag.current === false) {
            infoService.getInfo(iid)
                .then(res => {
                    setInfo(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])


    return (
        <div className="form">
            info Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="verion">Version</label>
                    <input type="text" name="version" value={info.version} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="ipAdress">Adresse IP</label>
                    <input type="text" name="ipAdress" value={info.ipAdress} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="port">Port</label>
                    <input type="text" name="port" value={info.port} onChange={onChange} />
                </div>
                <div className="group">
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
                <div className="group">
                    <label htmlFor="updateAt">Mise à jour le : </label>
                    <input type="date" name="updateAt" onChange={onChange} />
                </div>
                {/*{JSON.stringify(info)}*/}
                <div className="group">
                    <button>Mettre à jour</button>
                </div>
            </form>
        </div>
    );
};

export default InfoEdit;