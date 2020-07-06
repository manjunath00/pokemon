import React, { useState, useEffect } from "react";
 
import PokemonForm from "./PokemonForm";

function PokemonFormContainer({ isNew, pokemon, postPokemonFunc, notify }) {
  const [name, setName] = useState(null);
  const [attackRange, setAttackRange] = useState(50);
  const [defenseRange, setDefenseRange] = useState(50);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const [isnewAttribute, setIsNewAttribute] = useState(true);
  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [attributes, setAttributes] = useState([]);

  const type = isNew ? "New" : "Edit";

  useEffect(() => {
    if (!isNew) {
      const { pokemonName, attackLevel, defenseLevel, types } = pokemon;
      setName(pokemonName);
      setAttackRange(attackLevel);
      setDefenseRange(defenseLevel);
      setTypes(types);
      setAttributes(pokemon.attributes);
    }
  }, [isNew, pokemon]);

  const editCustomAttribute = (id) => {
    const attribute = attributes.filter((item) => item.id === id)[0];
    setSelectedAttribute(attribute);
    setIsNewAttribute(false);
    setIsNewModalOpen(true);
  };

  const deleteCustomAttribute = (id) => {
    const modifiedAttributes = attributes.filter((item) => item.id !== id);
    setAttributes(modifiedAttributes);
  };

  const submitTheData = (e) => {
    e.preventDefault();
    const pokemon = {
      pokemonName: name,
      types,
      attackLevel: attackRange,
      defenseLevel: defenseRange,
      attributes,
    };
    postPokemonFunc(pokemon)
    notify();
    console.log("data"); 
  };

  return (
    <PokemonForm
      type={type}
      isNewModalOpen={isNewModalOpen}
      setIsNewModalOpen={setIsNewModalOpen}
      name={name}
      setName={setName}
      attackRange={attackRange}
      setAttackRange={setAttackRange}
      defenseRange={defenseRange}
      setDefenseRange={setDefenseRange}
      types={types}
      setTypes={setTypes}
      attributes={attributes}
      setAttributes={setAttributes}
      isnewAttribute={isnewAttribute}
      setIsNewAttribute={setIsNewAttribute}
      selectedAttribute={selectedAttribute}
      editCustomAttribute={editCustomAttribute}
      deleteCustomAttribute={deleteCustomAttribute}
      onSubmit={submitTheData}
    />
  );
}

export default PokemonFormContainer;
