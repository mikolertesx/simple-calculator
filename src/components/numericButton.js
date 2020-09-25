import React from 'react';
import './numericButton.css';

const NumericButton = (children) => {
  return <button className="numeric-button">
    {children.text}
  </button>
}

export default NumericButton;