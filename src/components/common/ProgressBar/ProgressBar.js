import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

function ProgressBar({ type, score }) {
  const color = type === "Defense" ? "#1199ff" : "#ffa500";

  const style = {
    position: "absolute",
    height: "100%",
    width: `${score > 100 ? 100 : score}%`,
    borderRadius: "5px",
    animationDuration: "2s",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
    backgroundColor: color,
  };

  return (
    <div className='progressbar'>
      <div className='flex'>
        <p>{type}</p>
        <p>{score}</p>
      </div>
      <div className='progressbar__container'>
        <span style={style}></span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = propTypes;

export default ProgressBar;
