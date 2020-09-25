import React from 'react';

import './display.css';

const Display = (children) => {
  const {text, subtext} = children;

  return <div className="Display">
    <small>{subtext === null ? '':subtext}</small>
    <p>{text === null ? 'Input numbers':text}</p>
  </div>
}

export default Display;