import React from "react";

import { Modal, Field, SelectTypes, Button } from "../../common";
import { CustomAttributeForm, CustomAttributesList } from "../CustomAttribute";
import history from "../../../history";

function PokemonForm({
  type,
  isNewModalOpen,
  name,
  setName,
  attackRange,
  setAttackRange,
  defenseRange,
  setDefenseRange,
  attributes,
  types,
  setTypes,
  setIsNewModalOpen,
  setIsNewAttribute,
  isnewAttribute,
  setAttributes,
  selectedAttribute,
  editCustomAttribute,
  deleteCustomAttribute,
  onSubmit,
}) {
  if (!isNewModalOpen) {
    return (
      <Modal>
        <form className='form-container' onSubmit={onSubmit}>
          <h3>{type} Pokemon</h3>
          <Field
            type='text'
            placeholder="Pokemon's name"
            label='Name'
            value={name}
            onChange={setName}
          />
          <Field
            type='range'
            label='Attack Level'
            value={attackRange}
            onChange={setAttackRange}
            max={200}
            min={0}
            step={1}
          />
          <Field
            type='range'
            label='Defense Level'
            value={defenseRange}
            onChange={setDefenseRange}
            max={200}
            min={0}
            step={1}
          />

          <SelectTypes types={types} setTypes={setTypes} />
          <div className='custom-attributes'>
            <div>Custom Attributes</div>
            <Button
              data='new'
              text='Add new'
              onClick={() => {
                setIsNewModalOpen(true);
                setIsNewAttribute(true);
              }}
            />
          </div>
          {attributes.length > 0 ? (
            <CustomAttributesList
              attributes={attributes}
              onEdit={editCustomAttribute}
              onDelete={deleteCustomAttribute}
            />
          ) : null}
          <Button
            data='submit'
            text='submit'
            onClick={() => history.goBack()}
          />
        </form>
      </Modal>
    );
  } else {
    return (
      <Modal>
        <CustomAttributeForm
          isNew={isnewAttribute}
          onClose={setIsNewModalOpen}
          attributes={attributes}
          setAttribute={setAttributes}
          attributeVal={selectedAttribute}
        />
      </Modal>
    );
  }
}

export default PokemonForm;
