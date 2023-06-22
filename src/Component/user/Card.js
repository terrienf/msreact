import React from 'react';
import './card.css'
import { Link } from "react-router-dom";

const Card = ({ client, cardColor }) => {
    return (
        <div className="card shadow">
            <Link to={`/admin/infos/${client.id}`} className="card_link">
        <div className={`card ${cardColor}`}>
            <div className="card-details">
                <p className="text-title">{client.name}</p>
            </div>
            </div>
            </Link>
        </div>

    );
}

export default Card;
