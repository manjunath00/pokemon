import React from "react";
import { mount } from "enzyme";
import { Router } from "react-router-dom";
import history from "./history";

import App from "./App";
import PokemonContainer from "./components/Pokemon/PokemonContainer";

it("Renders the inner pokemon", () => {
  const wrapper = mount(
    <Router history={history}>
      <App />
    </Router>
  );
  const pokemon = wrapper.find(PokemonContainer);
  expect(pokemon.find(".pokemons--heading").text()).toEqual("Pokemons");
});
