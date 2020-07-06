const express = require("express");
const router = express.Router();
// const { check } = require("express-validator");

const { getPokemonById, getAllPokemonCount } = require("../middleware/pokemon");

const {
  createANewPokemon,
  getAllPokemons,
  getAPokemon,
  updateAPokemon,
} = require("../controllers/pokemon");

router.param("pokemonId", getPokemonById);

router.post("/pokemons", createANewPokemon);

router.get("/pokemons", getAllPokemonCount,  getAllPokemons);

router.get("/pokemon/:pokemonId", getAPokemon);

router.patch("/pokemon/:pokemonId", updateAPokemon);

module.exports = router;
