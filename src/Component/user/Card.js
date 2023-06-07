import React from 'react';
import './card.css'
import {Link} from "react-router-dom";

const Card = ({props, image}) => {

    return (
        <Link to={`/infos/${props.id}`} className="card_link">
            <article className='card_client'>
                <img src={image + props.id} alt={props.name}/>
                <div>{props.name}</div>
            </article>
        </Link>

            );
            };

            export default Card;