

import React from "react";
import './styles/Square.css';

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square