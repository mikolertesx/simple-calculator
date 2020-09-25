import React from "react";

import './App.css';

// Components.
import Display from "./components/display";
import NumericButton from "./components/numericButton";

function App() {
  return (
    <div className="App">
      <Display/>
      <div className="calc-buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value) => (
          <NumericButton key={`btn-${value}`} text={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
