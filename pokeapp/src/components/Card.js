import React from 'react';
import './Card.css';

const Card = ({ name, id, sprite, genus }) => {
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-20 h-100">
            <img alt={name} src={sprite}/>
            <div>
                <h2>{id}: <span className="firstLetterCap">{name}</span></h2>
                <h3>{genus}</h3>
            </div>
        </div>
    )
}

export default Card;