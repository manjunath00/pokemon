const mongoose = require("mongoose");
const { ObjectId, Types } = mongoose.Schema;

const variousTypes = Object.freeze({
  Grass: "Grass",
  Poison: "Poison",
  Fire: "Fire",
  Flying: "Flying",
  Water: "Water",
  Bug: "Bug",
  Normal: "Normal",
  Electric: "Electric",
  Ground: "Ground",
  Fairy: "Fairy",
  Fighting: "Fighting",
  Psychic: "Psychic",
  Rock: "Rock",
  Steel: "Steel",
  Ice: "Ice",
  Ghost: "Ghost",
  Dragon: "Dragon",
});

const pokemonSchema = new mongoose.Schema({
  pokemonName: {
    type: String,
    unique: true,
    required: true,
    maxlength: 150,
    trim: true,
  },
  types: [
    {
      type: String,
      required: true,
    },
  ],
  attackLevel: {
    type: Number,
    require: true,
    trim: true,
    min: 18,
    max: 200,
  },
  defenseLevel: {
    type: Number,
    require: true,
    trim: true,
    min: 18,
    max: 200,
  },
  attributes: [
    {
      type: Types.Mixed,
      id: {
        type: Number,
        unique: true,
      },
      label: {
        type: String,
        require: true,
        trim: true,
      },
      value: {
        type: String,
        require: true,
        trim: true,
      },
    },
  ],
});

pokemonSchema.pre("save", function (next) {
  const pokemon = this;
  const variousTypesValues = Object.values(variousTypes);
  pokemon.types.forEach((type) => {
    if (!variousTypesValues.includes(type)) {
      throw new Error("Invalid pokemon type property");
    }
  });
  next();
});

/* pokemonSchema.index(
  { pokemonName: "text", types: "text" },
  { weights: { pokemonName: 5, types: 4 } }
); */

pokemonSchema.index({ pokemonName: "text" });

module.exports = mongoose.model("Pokemon", pokemonSchema);

/* 
  {
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子"
    },
    "type": ["Grass", "Poison"],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
*/
