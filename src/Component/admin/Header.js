import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from './logo.png';
import './header.css';
import {accountService} from "../../services/account.service";

const Header = () => {
    let navigate = useNavigate();

    const logout = () => {
        accountService.logout();
        navigate('/');
    };

    return (
        <header className='aheader'>
            <img src={logo} alt='mediasofts' className='MS-alogo'/>
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <button onClick={logout}>Logout</button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
