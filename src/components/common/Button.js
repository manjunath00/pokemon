import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.string,
};

function Button({ data }) {
  return <button className={`btn ${data}`}>{data}</button>;
}

Button.propTypes = propTypes;

export default Button;
