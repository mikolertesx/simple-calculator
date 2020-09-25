import React from 'react';
import './operationButton.css';

const operationButton = (children) => {
  return <button onClick={children.onClick} className="operation-button">
    {children.text}
  </button>
}

export default operationButton;