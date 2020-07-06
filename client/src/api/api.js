import axios from "axios";

const getAllPokemons = (pageNumber = 1, limit = 20, searchTerm = "") => {
  let endPoint = ""; 
  if (pageNumber > 1) endPoint += `page=${pageNumber}`;
  if (limit !== 20) endPoint += `limit=${limit}`;
  if (searchTerm) endPoint += `search=${searchTerm}`;
  return axios.get(`/api/pokemons?${endPoint}`);
};

const getAPokemon = (pokemonId) => {
  return axios.get(`/api/pokemon/${pokemonId}`);
};

const addAPokemon = (pokemon) => {
  return axios.post(`/api/pokemons`, pokemon);
};

const updateAPokemon = (pokemonId, pokemon) => {
  return axios.patch(`/api/pokemon/${pokemonId}`, pokemon);
};

export { getAllPokemons, getAPokemon, addAPokemon, updateAPokemon };
