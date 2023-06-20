import React, { useEffect, useRef, useState } from 'react';
import { clientService } from "../../services/client.service";
import Card from "../../Component/user/Card";

const Dashboard = () => {
    const [clients, setClients] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            clientService.getAllClients()
                .then(res => {
                    setClients(res.data);
                })
                .catch(err => console.log(err));
        }
        return () => {
            flag.current = true;
        };
    }, []);

    return (
        <div className='home'>
            {clients.map((client, id) => {
                const updatedAt = new Date(client.infos[0]?.updateAt);
                const currentTime = new Date();
                const timeDiff = currentTime - updatedAt;
                const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)); // Différence en heures
                console.log(updatedAt);

                let cardColor = '';
                if (hoursDiff < 24) {
                    cardColor = 'green'; // Mise à jour récente (moins de 24 heures)
                } else if (hoursDiff < 48) {
                    cardColor = 'yellow'; // Mise à jour récente (entre 24 et 48 heures)
                } else {
                    cardColor = 'red'; // Mise à jour plus ancienne (plus de 48 heures)
                }

                return (
                    <Card key={id} client={client} image='https://picsum.photos/200/300?random=' cardColor={cardColor} />
                );
            })}
        </div>
    );
};

export default Dashboard;
