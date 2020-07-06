import React from "react";

import PokemonItem from "./PokemonItem"; 

function PokemonContainer({ allPokemons, containerHeading }) {
  return (
    <div className='pokemons'>
      <div className='pokemons--heading'>{containerHeading}</div>
      <div className='pokemons--container'>
        {allPokemons.map((item) => (
          <PokemonItem pokemonData={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default PokemonContainer;
