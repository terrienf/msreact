import React, {useEffect, useRef, useState} from 'react';
import {clientService} from "../../services/client.service";
import Card from "../../Component/user/Card";
import './layout.css'

const Home = () => {

    return (
        <div className='home'>
            <h1>Bienvenue</h1>
        </div>
    );
};

export default Home;