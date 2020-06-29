import PokemonData from "./pokedex.json";

const Pokemon = () => PokemonData.slice(0, 150);

export default Pokemon;
