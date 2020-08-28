import React from 'react';
import Card from './Card';

// class CardList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pokemon: [],
//         }
//         console.log(this.props.colorInput)
//     }

//     componentDidMount() {
//         // console.log(this.props.colorInput)
//         fetch(`https://pokeapi.co/api/v2/pokemon-color/${this.props.colorInput}`)
//         .then(resp => resp.json())
//         .then(data => {
//             let pokemonURLs = data.pokemon_species.map(a => a.url);
//             let randomPokemon = [];
//             for (let i=0; i<10; i++) {
//                 randomPokemon.push(pokemonURLs.pop([Math.floor(Math.random() * pokemonURLs.length)]))
//             }
//             // console.log(randomPokemon)
//             let pokemonList = [];
//             for (let i=0; i<randomPokemon.length; i++) {
//                 fetch(`${randomPokemon[i]}`)
//                     .then(resp2 => resp2.json())
//                     .then(data2 => {
//                         let { name, id, genera } = data2
//                         if (genera.length !== 0) {
//                             genera = genera[7].genus
//                         }
//                         let sprite = '';
//                         if (id > 807) {
//                             sprite = 'https://smithssanitationsupply.ca/wp-content/uploads/2018/06/noimage-1.png'
//                         } else {
//                             sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
//                         }
//                         pokemonList.push({
//                             name: name,
//                             id: id,
//                             sprite: sprite,
//                             genus: genera
//                         })
//                         // console.log(pokemonList);
//                     })
//                 }
//             this.setState({ pokemon: pokemonList });
//         })
//     }


//     // componentDidMount() {
//     // // if (this.state.colorInput.length > 0) {
//     // //     fetch(`https://pokeapi.co/api/v2/pokemon-color/${this.state.colorInput}`)
//     // if (true) {
//     //     fetch('https://pokeapi.co/api/v2/pokemon-color/black')
//     //     .then(resp => resp.json())
//     //     .then(data => {
//     //         let pokemonURLs = data.pokemon_species.map(a => a.url);
//     //         let randomPokemon = [];
//     //         for (let i=0; i<10; i++) {
//     //             randomPokemon.push(pokemonURLs.pop([Math.floor(Math.random() * pokemonURLs.length)]))
//     //         }
//     //         let pokemonList = [];
//     //         for (let i=0; i<randomPokemon.length; i++) {
//     //             fetch(`${randomPokemon[i]}`)
//     //                 .then(resp2 => resp2.json())
//     //                 .then(data2 => {
//     //                     console.log(data2.names[7])
//     //                     // pokemonList.push({
//     //                     //     name: data2.names[8].name,
//     //                     //     id: data2.id,
//     //                     //     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
//     //                     //     genus: data2.genera[7].genus
//     //                     // })
//     //                 })
//     //             }
//     //         this.setState({ pokemon: randomPokemon });
//     //     })
//     // }
//     // }
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.pokemon.map((pokemon) => {
//                         return (
//                             <Card 
//                             key={pokemon.id}
//                             name={pokemon.name}
//                             id={pokemon.id}
//                             sprite={pokemon.sprite}
//                             genus={pokemon.genus}
//                             />
//                         );
//                     })
//                 }
//             </div>
//         );
//     }
// }

const CardList = ({ possiblePokemon }) => {
    if (typeof possiblePokemon !== 'undefined') {
        if (possiblePokemon.length !== 'undefined') {
            possiblePokemon = [possiblePokemon]
        }
        console.log(possiblePokemon);
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
                <h2>Awaiting Command</h2>
            </div>
        )
    }
}

export default CardList;