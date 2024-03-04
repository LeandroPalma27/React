import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({value}) => {

  const [prevValue, setValue] = useState(value);
  
  const handleAdd = () => {
    setValue( prevValue + 1);
  };
  
  const handleSubstract = () => {
    setValue(prevValue - 1);
  }
  
  const handleReset = () => {
    setValue(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{prevValue}</h2>
      <button onClick={handleAdd}>+1 (FUNCTIONAL COMPONENT)</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
