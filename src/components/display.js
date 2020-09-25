import React from 'react';

import './display.css';

const Display = (children) => {
  const {text} = children;

  return <div className="Display">
    <p>{text || 'Input numbers.'}</p>
  </div>
}

export default Display;