import operators from './operators';

const procedures = {
  'CE': (displayState, valueState, operatorState) => {
    const [, setDisplay] = displayState;
    const [, setCurrentValue] = valueState;
    const [, setOperatorState] = operatorState;
    setOperatorState(null);
    setDisplay(null);
    setCurrentValue(null);
  },
  'C': (displayState, _valueState, _operatorState) => {
    const [, setDisplay] = displayState;
    setDisplay(null);
  },
  'DEL': (displayState, _valueState, _operatorState) => {
    const [, setDisplay] = displayState;
    setDisplay(prevDisplay => {
      if (prevDisplay === null) return null;
      if (!prevDisplay.length === 1) return null;
      
      return prevDisplay.slice(0, -1);
    });
  },
  '=': (displayState, valueState, operatorState) => {
    const [display, setDisplay] = displayState;
    const [currentValue, setCurrentValue] = valueState;
    const [lastOperator, setLastOperator] = operatorState;
    if (lastOperator === null) {return ;}
    if (display === null || currentValue === null) { return ;}
    setCurrentValue(prevValue => {
      return operators[lastOperator](prevValue, +display);
    });
    setLastOperator(null);
    setDisplay(null);
  },
  '+/-': (displayState, _valueState, _operatorState) => {
    const [display, setDisplay] = displayState;
    if (display === null || isNaN(+display)) return ;
    setDisplay((prevDisplay) => {
      return +prevDisplay * - 1;
    });
  },
  '.': (displayState, _valueState, _operatorState) => {
    const [display, setDisplay] = displayState;
    if (!display) return ;
    setDisplay(prevDisplay => {
      return prevDisplay + ".";
    })
  },
};

export default procedures;