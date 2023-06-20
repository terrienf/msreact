import React from 'react';
import './card.css'
import {Link} from "react-router-dom";

const Card = ({client, image, cardColor}) => {

    return (
        <div className={`card ${cardColor}`}>
            <div className="card-details">
                <p className="text-title">{client.name}</p>
                {/*<img src={image + props.id} alt={props.name}/>*/}
                {/*<p className="text-body">Here are the details of the card</p>*/}
            </div>
            <Link to={`/infos/${client.id}`} className="card_link">
                <button className="card-button">Info</button>
            </Link>
        </div>
    );
}
export default Card;