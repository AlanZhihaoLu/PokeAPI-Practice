import React from 'react';

const Card = ({ name, id, sprite, genus }) => {
    return (
        <div>
            <img alt={name} src={sprite}/>
            <div>
                <h2>{`${id}: ${name}`}</h2>
                <p>{genus}</p>
            </div>
        </div>
    )
}

export default Card;