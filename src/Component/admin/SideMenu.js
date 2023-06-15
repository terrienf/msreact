import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../pages/Admin/admin.css'

const SideMenu = ({Roles}) => {
    const [showClientAdd, setShowClientAdd] = useState(false);
    const [showUtilisateurAdd, setShowUtilisateurAdd] = useState(false);

    const toggleClient = () => {
        setShowClientAdd(!showClientAdd);
    };

    const toggleUtilisateur = () => {
        setShowUtilisateurAdd(!showUtilisateurAdd);
    };

    let navigate = useNavigate()

    return (
        <div className="SideMenu">
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/dashboard"><span className="nav-item">Dashboard</span></Link>
                    </li>
                    <li onClick={toggleUtilisateur}>
                        <Link to="/admin/user/index"><span className="nav-item">Utilisateurs</span></Link>
                        {showUtilisateurAdd && (
                            <ul className="dropdown-menu">
                                <li><Link to="/admin/user/userAdd">Ajouter</Link></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={toggleClient}>
                        <Link to="/admin/client/index"><span className="nav-item">Clients</span></Link>
                        {showClientAdd && (
                            <ul className="dropdown-menu">
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