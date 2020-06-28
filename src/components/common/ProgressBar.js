import React from "react";

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
    <div>
      <div className='progressbar-title flex'>
        <p>{type}</p>
        <p className='percent'>{score}</p>
      </div>
      <div className='bar-container'>
        <span style={style}></span>
      </div>
    </div>
  );
}

export default ProgressBar;
