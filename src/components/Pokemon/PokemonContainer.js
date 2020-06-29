import React from "react";

import PokemonItem from "./PokemonItem";
import PokemonApi from "../../api/PokedoxApi";

function PokemonContainer() {
  const allPokemons = PokemonApi();
  return (
    <div className='pokemons'>
      <div className='pokemons--heading'>Pokemons</div>
      <div className='pokemons--container'>
        {allPokemons.map((item) => (
          <PokemonItem pokemonData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default PokemonContainer;
