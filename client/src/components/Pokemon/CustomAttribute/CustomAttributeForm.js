import React, { useState, useEffect } from "react";

import { Field, Button } from "../../common";

function CustomAttributeForm({
  onClose,
  attributes,
  setAttribute,
  attributeVal,
  isNew,
}) {
  const [attributeLabel, setAttributeLabel] = useState("");
  const [attributeValue, setAttributeValue] = useState("");

  useEffect(() => {
    if (!isNew) {
      setAttributeLabel(attributeVal.label);
      setAttributeValue(attributeVal.value);
    }
  }, [isNew]);

  const onSubmit = (e) => {
    e.preventDefault();
    let otherAttributes, allAttributes;
    const id = isNew ? Date.now() : attributeVal.id;

    const editedAttribute = {
      id,
      label: attributeLabel,
      value: attributeValue,
    };

    if (isNew) {
      otherAttributes = attributes;
    } else {
      otherAttributes = attributes.filter(
        (item) => item.id !== attributeVal.id
      );
    }

    allAttributes = [...otherAttributes, editedAttribute];
    setAttribute(allAttributes);
    onClose(false);
  };

  const onCancel = () => onClose(false);

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <Field
        type='text'
        placeholder='Name of the attribute'
        label='Name of the attribute'
        value={attributeLabel}
        onChange={setAttributeLabel}
      />

      <div className='form-group'>
        <label className='form-label'>Value of the attribute</label>
        <textarea
          rows='4'
          cols='30'
          onChange={(e) => setAttributeValue(e.target.value)}>
          {isNew ? null : attributeVal.value}
        </textarea>
      </div>

      <div className='flex'>
        <Button data='cancel' onClick={onCancel} text='cancel' />
        <Button data='submit' text='submit' />
      </div>
    </form>
  );
}
export default CustomAttributeForm;
