import React, { useState, useEffect } from 'react';
import Calculations from './calculations.jsx';
import Keypad from './keypad.jsx';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleKeyPadInput = (event) => {
    const newExpression = expression + event.target.value;
    setExpression(newExpression);
  }

  const handleInputChange = (event) => {
    setExpression(event.target.value);
  }

  return (
    <div className="calculator">
      <Calculations />
      <div className="expression" >
        <div className="left-block"></div>
        <input className="exp-text" value={expression} onChange={handleInputChange}/>
      </div>
      <Keypad handleKeyPadInput={handleKeyPadInput}/>
    </div>
  )
}

export default Calculator;