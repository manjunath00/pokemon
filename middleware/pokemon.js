const Pokemon = require("../models/pokemon");

exports.getPokemonById = (req, res, next, pokemonId) => {
  Pokemon.findById(pokemonId).exec((err, pokemon) => {
    if (err) {
      return res.status(400).json({ message: "Pokemon not found in db" });
    }

    req.pokemon = pokemon;
    next();
  });
};

exports.getAllPokemonCount = (req, res, next) => {
  let placeholder = {};
  if (req.query.search) {
    const searchTerm = req.query.search;
    placeholder = { $text: { $search: searchTerm } };
  }
  Pokemon.find(placeholder).countDocuments((err, count) => {
    req.count = count;

    next();
  });
};
