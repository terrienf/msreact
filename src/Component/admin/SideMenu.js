import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../../pages/Admin/admin.css'

const SideMenu = () => {
    const [showClientAdd, setShowClientAdd] = useState(false);
    const [showUtilisateurAdd, setShowUtilisateurAdd] = useState(false);

    const toggleClient = () => {
        setShowClientAdd(!showClientAdd);
    };

    const toggleUtilisateur = () => {
        setShowUtilisateurAdd(!showUtilisateurAdd);
    };

    return (
        <div className="SideMenu">
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/dashboard"><p>Dashboard</p></Link>
                    </li>
                    <li onClick={toggleUtilisateur}>
                        <Link to="/admin/user/index"><p>Utilisateurs</p></Link>
                        {showUtilisateurAdd && (
                            <ul>
                                <li><Link to="/admin/user/userAdd">Ajouter</Link></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={toggleClient}>
                        <Link to="/admin/client/index"><p>Clients</p></Link>
                        {showClientAdd && (
                            <ul>
                                <li><Link to="/admin/client/clientAdd">Ajouter</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
        ;
};

export default SideMenu;