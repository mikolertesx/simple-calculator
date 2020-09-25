import React from 'react';
import './numericButton.css';

const NumericButton = (children) => {
  return <button onClick={children.onClick} className="numeric-button">
    {children.text}
  </button>
}

export default NumericButton;