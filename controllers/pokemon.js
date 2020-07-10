const { validationResult } = require("express-validator");

const Pokemon = require("../models/pokemon");
const { extractPokemonDetails } = require("../utils/pokemon");

exports.createANewPokemon = (req, res) => {
  const receivedPokemon = extractPokemonDetails(req.body);

  const pokemonObj = new Pokemon(receivedPokemon);

  pokemonObj.save((err, pokemon) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.json(pokemon);
  });
};

exports.getAllPokemons = (req, res) => {
  let count = req.count;
  let pageNum = 1;
  if (req.query.page) {
    pageNum = Number(req.query.page);
  }

  let limit = 20;
  if (req.query.limit) {
    limit = Number(req.query.limit);
  }

  let skipPage = 0;
  if (pageNum > 1) {
    skipPage = limit * pageNum - 1;
  }

  let placeholder = {};
  if (req.query.search) {
    const searchTerm = req.query.search;
    const searchKey = new RegExp("^" + searchTerm, "i");
    placeholder = { pokemonName: searchKey };
  }

  Pokemon.find(placeholder)
    .skip(skipPage)
    .limit(limit)
    .sort({ pokemonName: "asc" })
    .exec((err, pokemons) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      const json = {
        data: pokemons,
        meta: { totalItems: count, pageNumber: pageNum },
      };

      return res.json(json);
    });
};

exports.getAPokemon = (req, res) => {
  const pokemon = req.pokemon;
  return res.json(pokemon);
};

exports.updateAPokemon = (req, res) => {
  const pokemon = req.body;

  Pokemon.findByIdAndUpdate(
    { _id: req.pokemon._id },
    { $set: pokemon },
    { new: true, useFindAndModify: false },
    (err, pokemon) => {
      if (err) {
        return res
          .status(400)
          .json({ message: "Failed to update the pokemon" });
      }
      return res.json(pokemon);
    }
  );
};

exports.deleteAPokemon = (req, res) => {
  const pokemon = req.pokemon;

  pokemon.remove((err, pokemon) => {
    if(err) {
      return res.status(400).json({ error : "Unable to delete a pokemon"})
    }

    return res.json({
      message: `${pokemon.pokemonName} successfull deleted`,
    })
  })
}
