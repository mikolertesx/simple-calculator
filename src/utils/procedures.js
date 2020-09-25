import operators from './operators';

const procedures = {
  'CE': (display, setDisplay, setCurrentValue, currentValue, setLastOperator, lastOperator) => {
    setDisplay(null);
    setCurrentValue(null);
  },
  'C': (display, setDisplay, _setCurrentValue, currentValue, setLastOperator, lastOperator) => {
    setDisplay(null);
  },
  'DEL': (display, setDisplay, setCurrentValue, currentValue, setLastOperator, lastOperator) => {
    setDisplay(prevDisplay => {
      if (!prevDisplay) return null;
      if (!prevDisplay.length === 1) return null;
      
      return prevDisplay.slice(0, -1);
    });
  },
  '=': (display, setDisplay, setCurrentValue, currentValue, setLastOperator, lastOperator) => {
    if (lastOperator === null) {return ;}
    setCurrentValue(prevValue => {
      return operators[lastOperator](prevValue, +display);
    });
    setLastOperator(null);
    setDisplay(null);
  },
  '+/-': (display, setDisplay, setCurrentValue, currentValue, setLastOperator, lastOperator) => {
    if (!display || isNaN(+display)) return ;
    setDisplay((prevDisplay) => {
      return +prevDisplay * - 1;
    });
  },
  '.': (display, setDisplay, setCurrentValue, currentValue, setLastOperator, lastOperator) => {
    if (!display) return ;
    setDisplay(prevDisplay => {
      return prevDisplay + ".";
    })
  },
};

export default procedures;