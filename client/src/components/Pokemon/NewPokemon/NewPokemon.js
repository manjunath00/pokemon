import React from "react";

import Pokemon from "../PokemonForm/PokemonFormContainer";

function NewPokemon({ postPokemonFunc, notify }) {
  return (
    <Pokemon isNew={true} postPokemonFunc={postPokemonFunc} notify={notify} />
  );
}

export default NewPokemon;
