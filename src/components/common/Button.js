import React from "react";

function Button({ type, data }) {
  return <button className={`btn ${data}`}>{data}</button>;
}

export default Button;
