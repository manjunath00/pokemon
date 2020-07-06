const extractPokemonDetails = (body) => {
  const { types, attributes, pokemonName, attackLevel, defenseLevel } = body;
  const newBody = {};

  if (types && types.length > 0) {
    newBody.types = types;
  }

  if (attributes && attributes.length > 0) {
    newBody.attributes = attributes;
  }

  if (pokemonName) {
    newBody.pokemonName = pokemonName;
  }

  if (attackLevel) {
    newBody.attackLevel = attackLevel;
  }

  if (defenseLevel) {
    newBody.defenseLevel = defenseLevel;
  }

  return newBody;
};

module.exports = { extractPokemonDetails };
