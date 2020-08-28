import React from 'react';

const Card = ({ name, id, sprite, genus }) => {
    return (
        <div>
            <img alt={name} src={sprite}/>
            <div>
                <h2>{id}: <span className="firstLetterCap">{name}</span></h2>
                <h3>{genus}</h3>
            </div>
        </div>
    )
}

export default Card;