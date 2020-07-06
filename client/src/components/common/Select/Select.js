import React, { useState, useEffect } from "react";
 
import Button from "../Button/Button";

function SelectTypes({ types, setTypes, defaultTypes }) {
  const [selectedTypes, setSelectedTypes] = useState(types);
  const [allTypes, setAllTypes] = useState(defaultTypes);

  useEffect(() => {
    setSelectedTypes(types);
    const filteredTypes = allTypes.filter((item) =>
      types.includes(item) ? null : item
    );
    setAllTypes(filteredTypes);
  }, [types]);

  const onSelected = (e) => {
    const type = e.target.value;
    if (type) {
      let modifiedArray = selectedTypes;
      modifiedArray.push(type);
      setSelectedTypes(modifiedArray);
      setTypes(modifiedArray);

      /* remove the selected types */
      let filteredTypes = allTypes.filter((item) => item !== type);
      setAllTypes(filteredTypes);
      /* pass it to parent component */
    }
  };

  const onClear = () => {
    setSelectedTypes([]);
    setAllTypes(defaultTypes);
  };

  const allSelectedTypes = () => {
    if (selectedTypes.length > 0) {
      return selectedTypes.map((item, index) => (
        <Button data={item} key={index} text={item} />
      ));
    }
  };
  const deleteButton = () => {
    if (selectedTypes.length > 0) {
      return (
        <i
          className='fa fa-trash'
          aria-hidden='true'
          onClick={() => onClear()}></i>
      );
    }
  };

  return (
    <div className='select'>
      <label className='select--heading'>Type</label>
      <div className='select--bar'>
        <p className='select--bar__input'>
          <select onChange={onSelected}>
            <option value='' className='select--bar__input--option'>
              Select
            </option>
            {allTypes.map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
        </p>
        <p className='select--bar__selected'>
          {allSelectedTypes()}
          {deleteButton()}
        </p>
      </div>
    </div>
  );
}

export default SelectTypes;

SelectTypes.defaultProps = {
  defaultTypes: [
    "Grass",
    "Poison",
    "Fire",
    "Flying",
    "Water",
    "Bug",
    "Normal",
    "Electric",
    "Ground",
    "Fairy",
    "Fighting",
    "Psychic",
    "Rock",
    "Steel",
    "Ice",
    "Ghost",
    "Dragon",
  ],
};
