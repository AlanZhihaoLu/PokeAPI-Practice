import React from 'react';
import './App.css';
import CardList from './CardList';
import SelectBox from './SelectBox';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorField: 'black',
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

  somethingIsSelected = (event) => {
    this.setState({ colorField: event.target.value })
  }

  render() {
    // const filteredPokemon = pokemon.filter(pokemon => {
    //   return pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    // })
    // fetch('https://pokeapi.co/api/v2/pokemon-color/black')
    //   .then(resp => resp.json())
    //   .then(data => {
    //     let pokemonURLs = data.pokemon_species.map(a => a.url);
    //     let randomPokemon = [];
    //     for (let i=0; i<10; i++) {
    //       randomPokemon.push(pokemonURLs.pop([Math.floor(Math.random() * pokemonURLs.length)]))
    //     }
    //     let pokemonList = [];
    //     for (let i=0; i<randomPokemon.length; i++) {
    //       fetch(`${randomPokemon[i]}`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //           pokemonList.push({
    //             name: data.names[8].name,
    //             id: data.id,
    //             genus: data.genera[7].genus
    //           })
    //         })
    //     }
    //     this.setState({ pokemon: randomPokemon });
    //   })
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
      <h2>{this.state.colorField}</h2>
      <SelectBox colorOptions={this.state.colorOptions} onSelect={this.somethingIsSelected}/>
      <CardList colorInput={this.state.colorField}/>
      </div>
    )
  }
}

export default App;
