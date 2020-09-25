import React from "react";

import './App.css';

// Components.
import Display from "./components/display";
import NumericButton from "./components/numericButton";
import { appLayout } from "./layout";

function App() {
  return (
    <div className="App">
      <Display/>
      <div className="calc-buttons">
        {appLayout.map((value) => (
          <NumericButton key={`btn-${value}`} text={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
