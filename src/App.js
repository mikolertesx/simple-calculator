import React, { useState } from "react";

import "./App.css";

// Components.
import Display from "./components/display";
import NumericButton from "./components/numericButton";
import OperationButton from "./components/operationButton";

import operators from "./utils/operators";
import { appLayout } from "./utils/layout";

function App() {
  const [display, setDisplay] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);

  const operationButtonHandler = (operator) => {
    if (operators[operator]) {
      const operation = operators[operator];
      // Do the math.
      if (currentValue === null) {
        setCurrentValue(+display);
        setDisplay(null);
      } else {
        setCurrentValue((prevValue) => {
          setDisplay(null);
          return operation(prevValue, +display);
        });
      }
    } else {
      // Do the procedure.
    }
  };

  const numericButtonHandler = (number) => {
    setDisplay((prevDisplay) =>
      prevDisplay === null ? number.toString() : prevDisplay + number.toString()
    );
  };

  return (
    <div className="App">
      <Display text={display || currentValue} />
      <div className="calc-buttons">
        {appLayout.map((value) => {
          return isNaN(+value) ? (
            <OperationButton
              onClick={() => operationButtonHandler(value)}
              key={`btn-${value}`}
              text={value}
            />
          ) : (
            <NumericButton
              onClick={() => numericButtonHandler(value)}
              key={`btn-${value}`}
              text={value}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
