import React, {useEffect, useRef, useState} from 'react';
import {clientService} from "../../services/client.service";


const Home = () => {
    const [clients, setClients] = useState([])
    const flag = useRef (false)

    useEffect(() => {
        if(flag.current === false){
            clientService.getAllClients()
                .then(res=> setClients(res.data))
                .catch(err=>console.log(err))
        }
return() => flag.current = true
    }, [])

    return (
        <div className='home'>
            Home
        </div>
    );
};

export default Home;