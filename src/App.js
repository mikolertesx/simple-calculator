import React from "react";

import './App.css';

// Components.
import Display from "./components/display";
import NumericButton from "./components/numericButton";

function App() {
  const operations = {
    MOD: "%",
    CE: "CE",
    C: "C",
    DEL: "DEL",
    PRODUCT: "X",
    SUBSTRACT: "-",
    ADD: "+",
    EQUAL: "=",
    SWITCHSIGN: "+/-",
    ADDDOT: ".",
  };
const appLayout = [
    operations.MOD,
    operations.CE,
    operations.C,
    operations.DEL,
    7,
    8,
    9,
    operations.PRODUCT,
    4,
    5,
    6,
    operations.SUBSTRACT,
    1,
    2,
    3,
    operations.ADD,
    operations.SWITCHSIGN,
    0,
    operations.ADDDOT,
    operations.EQUAL,
  ];

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
