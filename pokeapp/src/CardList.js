import React from 'react';
import Card from './Card';

const CardList = ({ possiblePokemon }) => {
    if (typeof possiblePokemon !== 'undefined') {
        if (possiblePokemon.length !== 'undefined') {
            possiblePokemon = [possiblePokemon]
        } 
        possiblePokemon = possiblePokemon[0];
        // console.log('CardList', possiblePokemon);
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
    } else {
        return (
            <div>
                <h2>Waiting for Input...</h2>
            </div>
        )
    }
}

export default CardList;