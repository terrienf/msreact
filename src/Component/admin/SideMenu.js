import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = ({Roles}) => {
    return (
        <div className="SideMenu">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                {/*{Roles === 'ROLE_ADMIN' &&*/}
                <li>
                    User
                    <ul>
                         <li><Link to="/admin/user/index">Liste</Link></li>
                        <li><Link to="/admin/user/userAdd">Ajouter</Link></li>
                    </ul>
                </li>
            {/*}*/}
                <li>
                    Client
                    <ul>
                        <li><Link to="/admin/client/index">Liste</Link></li>
                        <li><Link to="/admin/client/clientAdd">Ajouter</Link></li>
                    </ul>
                </li>
                <li>
                    Info
                    <ul>
                        <li><Link to="/admin/info/index">Liste</Link></li>
                        <li><Link to="/admin/info/infoAdd">Ajouter</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;