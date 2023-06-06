import React from 'react';
import {Link} from "react-router-dom";
import './header.css';
import logo from './logo.png'

const Header = () => {
    return (
        <header className='uheader'>
            <img src={logo} alt='mediasofts' className='MS-ulogo'/>
            <nav>
                <ul>
                    <li><Link to="home">Accueil</Link></li>
                    {/*<li><Link to="infos">Infos</Link></li>*/}
                    {/*<li><Link to="clients">Clients</Link></li> |*/}
                    <li><Link to="admin">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;