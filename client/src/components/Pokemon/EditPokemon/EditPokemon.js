import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import Pokemon from "../PokemonForm/PokemonFormContainer";
import { LoadingSpinner } from "../../common";

function EditPokemon({
  specificPokemon,
  getPokemonFunc,
  notify,
  postPokemonFunc,
}) {
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonFunc(pokemonId);
  }, []);

  if (specificPokemon) {
    return (
      <Pokemon
        isNew={false}
        pokemon={specificPokemon}
        postPokemonFunc={postPokemonFunc}
        notify={notify}
      />
    );
  } else {
    return <LoadingSpinner />;
  }
}

export default EditPokemon;
