import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getAllPokemons,
  getAPokemon,
  updateAPokemon,
  addAPokemon,
} from "./api/api";

import { Pagination } from "./components/common";
import Header from "./components/Header/Header";
import {
  NewPokemon,
  EditPokemon, 
  Pokemon,
  SelectedPokemon
} from "./components/Pokemon";


function App() {
  const [store, setStore] = useState([]);
  const [specificPokemon, setspecificPokemon] = useState(null);
  const [meta, setMeta] = useState({});
  const [anyMessage, setAnyMessage] = useState(null);
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [containerHeading, setContainerHeading] = useState("Pokemons");
  const [pageMeta, setPageMeta] = useState("");

  useEffect(() => {
    console.log(page, "Page changing");
    pokemons(page, 20);
    setContainerHeading("All Pokemons");
  }, [reload, page]);

  const pokemons = async (page) => {
    const response = await getAllPokemons(page, 20);
    setStore(response.data.data);
    setSearchTerm(null);
    setMeta(response.data.meta);
    setSearchTerm("");
  };

  const getSpecificPokemon = async (pokemonId) => {
    const response = await getAPokemon(pokemonId);
    setspecificPokemon(response.data);
  };

  const createAPokemon = async (pokemon) => {
    try {
      const response = await addAPokemon(pokemon);
      setAnyMessage("Successfully created a pokemon");
      setReload(!reload);
    } catch (err) {
      setAnyMessage("Failed to create a pokemon");
    }
  };

  const updatePokemon = async (pokemon) => {
    const id = specificPokemon._id;
    try {
      const response = await updateAPokemon(id, pokemon);
      setAnyMessage("Successfully Update the pokemon");
      setReload(!reload);
    } catch (err) {
      setAnyMessage("Failed to create a pokemon");
    }
  };

  const searchPokemon = async (searchTerm) => { 
    const response = await getAllPokemons(1, 20, searchTerm);
    setSearchSuggestions(response.data.data);
    setPageMeta(response.data.meta);
  };

  const searchSubmitPokemon = (searchTerm) => {
    setStore(searchSuggestions);
    setContainerHeading(`Showing results for ${searchTerm}`);
    setMeta(pageMeta);
  };

  const notify = () => toast(anyMessage);
  return (
    <div className='container'>
      <Header
        searchSuggestions={searchSuggestions}
        searchPokemon={searchPokemon}
        onSearchSubmitFunc={searchSubmitPokemon}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onReload={setReload}
        reload={reload}
      />
      <ToastContainer />
      <Pokemon allPokemons={store} containerHeading={containerHeading} />
      <Switch>
        <Route
          path='/pokemon/:pokemonId'
          render={() => (
            <SelectedPokemon
              specificPokemon={specificPokemon}
              getPokemonFunc={getSpecificPokemon}
            />
          )}
        />
        <Route
          path='/new'
          render={() => (
            <NewPokemon postPokemonFunc={createAPokemon} notify={notify} />
          )}
        />
        <Route
          path='/edit/:pokemonId'
          render={() => (
            <EditPokemon
              specificPokemon={specificPokemon}
              getPokemonFunc={getSpecificPokemon}
              postPokemonFunc={updatePokemon}
              notify={notify}
            />
          )}
        />
      </Switch>
      <Pagination meta={meta} changePage={setPage} />
    </div>
  );
}

export default App;
