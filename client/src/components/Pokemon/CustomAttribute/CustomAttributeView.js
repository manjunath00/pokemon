import React from "react";

function CustomAttributeView({ item, onEdit, onDelete }) {
  return (
    <div className='form-group'>
      <div className='flex'>
        <p className='form-label'>{item.label}</p>
        <i
          className='fa fa-pencil-square-o'
          aria-hidden='true'
          onClick={() => onEdit(item.id)}></i>
        <i
          className='fa fa-trash'
          aria-hidden='true'
          onClick={() => onDelete(item.id)}></i>
      </div>
      <p /* className='form-input' */>{item.value}</p>
    </div>
  );
}

export default CustomAttributeView;
