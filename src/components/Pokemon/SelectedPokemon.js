import React from "react";
import { withRouter } from "react-router-dom";

import Modal from "../common/Modal";
import PokemonApi from "../../api/PokedoxApi";
import { Button, ProgressBar } from "../common";

function SelectedPokomon(props) {
  const id = props.match.params.pokemonId;
  const clickedPokemon = PokemonApi().filter((item) => item.id === Number(id))[0];
  const { name, base, type } = clickedPokemon;
  return (
    <Modal>
      <div className='selected-pokemon'>
        <div className='pokemon-item__name'>{name.english}</div>
        <div className='pokemon-item__skills'>
          <ProgressBar type='Attack' score={base.Attack} />
          <ProgressBar type='Defense' score={base.Defense} />
        </div>
        <div className='pokemon-item__types'>
          {type.map((item, index) => (
            <Button key={index} data={item} />
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default withRouter(SelectedPokomon);
