import React, {useEffect, useRef, useState} from 'react';
import {Outlet} from "react-router-dom";
import {clientService} from "../../services/client.service";
import Card from "../../Component/user/Card";

const Dashboard = () => {
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

            {
                clients.map((client, id) => (
                    <Card key={id} props={client} image='https://picsum.photos/200/300?random=' />
                ))
            }
        </div>
    );
};

export default Dashboard;