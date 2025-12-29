import React from "react";

const Gradient = ({ location }) => {
  return (
    <div
      /* 1. pointer-events-none: Ensures the gradient never blocks clicks on buttons below it.
         2. will-change-transform: Forces GPU rendering to prevent lag.
         3. ${location}: Your custom classes (position, colors, blur) 
      */
      className={`pointer-events-none will-change-transform transform-gpu ${location}`}
    />
  );
};

// React.memo ensures this component doesn't re-render unnecessarily
export default React.memo(Gradient);