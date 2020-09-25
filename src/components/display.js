import React from 'react';

import './display.css';

const Display = (children) => {
  const {text, subtext} = children;

  return <div className="Display">
    <small>{subtext || ''}</small>
    <p>{text || 'Input numbers.'}</p>
  </div>
}

export default Display;