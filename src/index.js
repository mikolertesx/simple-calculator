import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p className="warning-resolution">Resolution is too low to show a calculator.</p>
  </React.StrictMode>,
  document.getElementById('root')
);