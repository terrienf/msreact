import React from 'react';
import {Link} from "react-router-dom";
import logo from './logo.png'
import './header.css'

const Header = () => {
    return (
        <header className='aheader'>
            <img src={logo} alt='mediasofts' className='MS-alogo'/>
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/infos">Infos</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;