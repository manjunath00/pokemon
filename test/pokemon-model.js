const expect = require("chai").expect;

const Pokemon = require("../models/pokemon");

it("should throw an error if the name is invalid", function (done) {
  const dummyPokemon = {
    // pokemonName: "NNN",
  };
  var pokemon = new Pokemon(dummyPokemon);

  pokemon.validate(function (err) {
    expect(err.errors.pokemonName).to.exist;
    done();
  });
});
