import React from 'react';
import {Link} from "react-router-dom";
import './header.css';
import logo from './logo.png'

const Header = () => {
    return (
        <header className='uheader'>
            <img src={logo} alt='mediasofts' className='MS-alogo'/>
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                </ul>
            </nav>
            <a><Link className="button" to="admin">Login</Link></a>
        </header>

    );
};

export default Header;