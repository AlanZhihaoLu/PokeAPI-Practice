import React from 'react';
import './App.css';
import CardList from './CardList';
import SelectBox from './SelectBox';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorField: 'black',
      colorOptions: '',
      pokemon: {
        name: "Pikachu",
        id: 25,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        genus: 'Mouse Pokemon'
      }
      // pokemon: ''
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.colorField !== prevState.colorField) {
      console.log(this.state.colorField);
      fetch(`https://pokeapi.co/api/v2/pokemon-color/${this.state.colorField}`)
      .then(resp => resp.json())
      .then(data => {
          let pokemonURLs = data.pokemon_species.map(a => a.url);
          let randomPokemon = [];
          for (let i=0; i<10; i++) {
              randomPokemon.push(pokemonURLs.pop([Math.floor(Math.random() * pokemonURLs.length)]))
          }
          console.log(randomPokemon)
          let pokemonList = [];
          for (let i=0; i<randomPokemon.length; i++) {
              fetch(`${randomPokemon[i]}`)
                  .then(resp2 => resp2.json())
                  .then(data2 => {
                      let { name, id, genera } = data2
                      if (genera.length !== 0) {
                          genera = genera[7].genus
                      }
                      let sprite = '';
                      if (id > 807) {
                          sprite = 'https://smithssanitationsupply.ca/wp-content/uploads/2018/06/noimage-1.png'
                      } else {
                          sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                      }
                      pokemonList.push({
                          name: name,
                          id: id,
                          sprite: sprite,
                          genus: genera
                      })
                      console.log(pokemonList);
                  })
              }
          this.setState({ pokemon: pokemonList });
      })
    }
}

  render() {
    // let newVar = this.state.pokemon;
    // console.log(newVar.map(resp=>resp));
    console.log(this.state.pokemon);
    if (typeof this.state.pokemon === 'object') {
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
      <CardList possiblePokemon={this.state.pokemon}/>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Loading!</h1>
      </div>
    )
  }
} 
}

export default App;
