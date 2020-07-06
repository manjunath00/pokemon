import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.string,
};

function Button({ data, onClick, text }) {
  return (
    <button className={`btn ${data}`} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
