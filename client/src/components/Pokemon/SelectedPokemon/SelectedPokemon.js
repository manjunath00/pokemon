import React, { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button, ProgressBar, Modal, LoadingSpinner } from "../../common";

function SelectedPokomon({ getPokemonFunc, specificPokemon }) {
  const [clickedPokemon, setClickedPokemon] = useState();
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonFunc(pokemonId);
    setClickedPokemon(specificPokemon);
  }, [pokemonId]);

  if (specificPokemon) {
    const {
      pokemonName,
      attackLevel,
      defenseLevel,
      types,
      attributes,
    } = specificPokemon;

    return (
      <Modal>
        <div className='selected-pokemon'>
          <div className='pokemon-item__name'>
            <span>{pokemonName}</span>
            <span>
              <Link to={`/edit/${pokemonId}`}>
                <span className='fa fa-pencil-square-o'></span>
              </Link>
            </span>
          </div>
          <div className='pokemon-item__skills'>
            <ProgressBar type='Attack' score={attackLevel} />
            <ProgressBar type='Defense' score={defenseLevel} />
          </div>
          {attributes.map((item) => (
            <div key={item.id}>
              <p>{item.label}</p> <p>{item.value}</p>
            </div>
          ))}
          <div className='pokemon-item__types'>
            {types.map((item, index) => (
              <Button key={index} data={item} text={item} />
            ))}
          </div>
        </div>
      </Modal>
    );
  } else {
    return <LoadingSpinner />;
  }
}

export default withRouter(SelectedPokomon);
