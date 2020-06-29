import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "../common";

const propTypes = {
  pokemonData: PropTypes.object.isRequired,
};

function PokemonItem({ pokemonData }) {
  const { id, name, type } = pokemonData;
  return (
    <Link to={`/pokemon/${id}`} className='link'>
      <div className='pokemon-item'>
        <div className='pokemon-item__name'> {name.english}</div>
        <div>
          {type.map((item, index) => (
            <Button key={index} data={item} />
          ))}
        </div>
      </div>
    </Link>
  );
}

PokemonItem.propTypes = propTypes;

export default PokemonItem;
