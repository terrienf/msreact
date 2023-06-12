import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {infoService} from "../../../services/info.service";

const User = () => {
    const [infos, setInfos] = useState([])
    const flag = useRef(false)



// Récupération de la liste des infos à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            infoService.getAllInfos()
                .then(res => {
                    console.log(res.data)
                    // Liste dans le state
                    setInfos(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])

    const delInfo = (infoId) => {
        infoService.deleteInfo(infoId)
            .then(res => {
                console.log(res)
                setInfos(current => current.filter(info => info.id !== infoId))
            })
    }

    return (
        <div className="info">
            liste info
            <table>
                <thead>
                <tr>
                    <th>code client</th>
                    <th>version</th>
                    <th>ipAdress</th>
                    <th>protocole</th>
                </tr>
                </thead>

                <tbody>
                {
                    infos.map(info => (
                        <tr key={info.id}>
                            <td>{info.client.code}</td>
                            <td>{info.version}</td>
                            <td>{info.ipAdress}</td>
                            <td>{info.protocole}</td>
                            <td>
                                <Link to={`/admin/info/infoEdit/${info.id}`}>
                                    <button className="edit_infoButton">Modifier</button>
                                </Link>
                            </td>
                            <td><button className="del_infoButton" onClick={() => delInfo(info.id)}>Supprimer</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default User;