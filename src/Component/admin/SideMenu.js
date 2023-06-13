import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../user/logo.png";
import {accountService} from "../../services/account.service";

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
    const logout = () => {
        accountService.logout()
        navigate('/')
    }

    return (
        <div>
            <nav>
                <ul>
                    {/*<li>*/}
                    {/*    <img src={logo} alt='mediasofts' className='MS-ulogo' />*/}
                    {/*</li>*/}
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

                    <li>
                        <button className='logout' onClick={logout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
        ;
};

export default SideMenu;