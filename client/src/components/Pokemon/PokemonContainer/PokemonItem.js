import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "../../common";

const propTypes = {
  pokemonData: PropTypes.object.isRequired,
};

function PokemonItem({ pokemonData }) {
  const { _id, pokemonName, types } = pokemonData;
  return (
    <div className='pokemon-item'>
      <Link to={`/pokemon/${_id}`} className='link'>
        <div className='pokemon-item__name'>
          <span>{pokemonName}</span>
        </div>
        <div>
          {types.map((item, index) => (
            <Button key={index} data={item} text={item} />
          ))}
        </div>
      </Link>
    </div>
  );
}

PokemonItem.propTypes = propTypes;

export default PokemonItem;
