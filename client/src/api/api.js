import axios from "axios";

const endPoint = process.env.backend || '';

const getAllPokemons = (pageNumber = 1, limit = 20, searchTerm = "") => {
  let endPoint = ""; 
  if (pageNumber > 1) endPoint += `page=${pageNumber}`;
  if (limit !== 20) endPoint += `limit=${limit}`;
  if (searchTerm) endPoint += `search=${searchTerm}`;
  return axios.get(`${endPoint}/api/pokemons?${endPoint}`);
};

const getAPokemon = (pokemonId) => {
  return axios.get(`${endPoint}/api/pokemon/${pokemonId}`);
};

const addAPokemon = (pokemon) => {
  return axios.post(`${endPoint}/api/pokemons`, pokemon);
};

const updateAPokemon = (pokemonId, pokemon) => {
  return axios.patch(`${endPoint}/api/pokemon/${pokemonId}`, pokemon);
};

export { getAllPokemons, getAPokemon, addAPokemon, updateAPokemon };
