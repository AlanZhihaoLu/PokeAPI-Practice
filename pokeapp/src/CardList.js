import React from 'react';
import Card from './Card';

const CardList = ({ possiblePokemon }) => {
    return (
        <div>
            {
            possiblePokemon.map((pokemon) => {
                return (
                    <Card 
                    key={pokemon.id}
                    name={pokemon.name}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    genus={pokemon.genus}
                    />
                );
            })
            }
        </div>
    );
}

export default CardList;