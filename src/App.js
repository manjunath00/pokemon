import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Pokemon from "./components/Pokemon/PokemonContainer";
import SelectedPokomon from "./components/Pokemon/SelectedPokemon";

function App() {
  return (
    <div className='container'>
      <Header />
      <Pokemon />
      <Route path='/pokemon/:pokemonId' component={SelectedPokomon} />
    </div>
  );
}

export default App;
