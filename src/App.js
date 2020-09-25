import React, { useState } from "react";

import "./App.css";

// Components.
import Display from "./components/display";
import NumericButton from "./components/numericButton";
import OperationButton from "./components/operationButton";

import operators from "./utils/operators";
import procedures from "./utils/procedures";
import { appLayout } from "./utils/layout";

function App() {
  const [display, setDisplay] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);

  const operationButtonHandler = (operator) => {
    let _display = display;
    let _currentValue = currentValue;
    let _lastOperator = lastOperator;

    const doOperation = (operator) => {
      const operation = operators[operator];
      if (_currentValue === null) {
        _currentValue = +_display;
        _display = null;
      } else if(_display) {
        _currentValue = operation(_currentValue, +_display);
        _display = null;
      }
    }

    if (_lastOperator !== null && operators[_lastOperator]) {
      doOperation(_lastOperator);
    }

    if (operators[operator]) {
      if (isNaN(+_display) || isNaN(+_currentValue)) { return ;}
      _lastOperator = operator;
      // Do the math.
      doOperation(operator);
      
      // Save to the state.
      setLastOperator(_lastOperator);
      setDisplay(_display);
      setCurrentValue(_currentValue);

    } else {
      // Do the procedure.
      procedures[operator](
        [display, setDisplay],
        [currentValue, setCurrentValue],
        [lastOperator, setLastOperator]
      );
    }
  };

  const numericButtonHandler = (number) => {
    setDisplay((prevDisplay) =>
      prevDisplay === null || +prevDisplay === 0 || isNaN(+prevDisplay) ? number.toString() : prevDisplay + number.toString()
    );
  };

  let currentOperation;

  if (currentValue !== null && lastOperator !== null) {
    currentOperation = `${currentValue} ${lastOperator} ...`;
  }

  if (display !== null && currentValue !== null && lastOperator !== null) {
    currentOperation = `${currentValue} ${lastOperator} ${display}`;
  }

  return (
    <div className="App">
      <Display text={display === null ? currentValue: display} subtext={currentOperation} />
      <div className="calc-buttons">
        {appLayout.map((value) => {
          return isNaN(+value) ? (
            <OperationButton
              onClick={() => operationButtonHandler(value)}
              key={`btn-${value}`}
              text={value}
              fill={value === '='}
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
