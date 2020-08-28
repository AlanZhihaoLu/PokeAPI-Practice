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
      pokemon: [{
        name: "Pikachu",
        id: 25,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        genus: 'Mouse Pokemon'
      }],
      pokeURLs: []
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
    this.setState({ colorField: event.target.value }, this.getData);
  }

  getRandom = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  getData = async () => {
    // console.log('getData', this.state.colorField);
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${this.state.colorField}`);
    const data = await resp.json();
    let pokemonURLs = await data.pokemon_species.map(a => a.url);
    let randomPokemon = this.getRandom(pokemonURLs,10);
    // console.log('getData', randomPokemon)
    this.setState({ pokeURLs: randomPokemon }, this.getPokeInfo);
  }

  getPokeInfo = async () => {
    let pokemonList = [];
    let pokemonURLs = this.state.pokeURLs;
    try {
      for (let i=0; i<pokemonURLs.length; i++) {
        let resp = await fetch(`${pokemonURLs[i]}`);
        let { name, id, genera } = await resp.json();
        if (genera.length !== 0) {
          genera = genera[7].genus
        } else {
          genera = '[No Data]'
        }
        let sprite = '';
        if (id > 807) {
          sprite = 'https://vignette.wikia.nocookie.net/pokemon-glitch/images/8/8e/Spr_3r_000.png/revision/latest/top-crop/width/100/height/100?cb=20130324000249'
        } else {
          sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
        pokemonList.push({
          name: name,
          id: id,
          sprite: sprite,
          genus: genera
        })
        // console.log('getPokeInfo', pokemonList);
      }
      this.setState({ pokemon: pokemonList });
    }
    catch (e) {
      // console.log(e.message);
    }
  }

  render() {
    // console.log('render', this.state.pokemon);
    if (typeof this.state.pokemon === 'object') {
    return (
      <div>
      <h1>Hello!</h1>
      <h2>This will generate 10 random Pokemon of a specified color.<br></br>Enjoy!</h2>
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
