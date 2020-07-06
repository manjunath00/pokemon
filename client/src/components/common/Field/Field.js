import React from "react"; 

function Field({ type, placeholder, label, value, onChange, max, min, step }) {
  const other = {};

  if (type === "range") {
    other.max = max;
    other.min = min;
    other.step = step;
  }

  return (
    <div className='form-group'>
      <div className='flex'>
        <label className='form-label'>{label}</label>
        {type === "range" ? <p>{value}</p> : null}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={!value ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        className='form-input'
        {...other}
      />
    </div>
  );
}

export default Field;
