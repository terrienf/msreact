import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="SideMenu">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/user/index">Liste</Link></li>
                        <li><Link to="/admin/user/userAdd">Ajouter</Link></li>
                        <li><Link to="/admin/user/userEdit">Modifier</Link></li>
                    </ul>
                </li>
                <li>
                    Client
                    <ul>
                        <li><Link to="/admin/client/index">Liste</Link></li>
                        <li><Link to="/admin/client/clientAdd">Ajouter</Link></li>
                        <li><Link to="/admin/client/clientEdit">Modifier</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;