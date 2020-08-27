import React from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import SelectBox from './SelectBox';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      colorField: '',
      colorOptions: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon-color/')
      .then(resp=>resp.json())
      .then(data=>{
        this.setState({ colorOptions: data.results.map(a => a.name) });
      })
    }

  somethingIsTyped = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { pokemon, colorField } = this.state;
    // const filteredPokemon = pokemon.filter(pokemon => {
    //   return pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    // })
    let pokemonURLs = [];
    fetch('https://pokeapi.co/api/v2/pokemon-color/black')
      .then(resp => resp.json())
      .then(data => {
        let pokemonURLs = data.pokemon_species.map(a => a.url);
        let randomPokemon = [];
        for (let i=0; i<10; i++) {
          randomPokemon.push(pokemonURLs.pop([Math.floor(Math.random() * pokemonURLs.length)]))
        }
        this.setState({ pokemon: randomPokemon });
      })
    // const test = [
    //   {
    //     name: "Pikachu",
    //     id: 25,
    //     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    //     genus: 'Mouse Pokemon'
    //   }
    // ];
    return (
      <div>
      <h1>Hello!!!</h1>
      <SelectBox colorOptions={this.state.colorOptions}/>
      {/* <CardList possiblePokemon={test}/> */}
      </div>
    )
  }
}

export default App;
