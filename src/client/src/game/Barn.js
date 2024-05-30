// Barn.js
import React from 'react';

const Barn = ({ onBackClick }) => {
  return (
    <div>
      <h1>Barn</h1>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default Barn;
