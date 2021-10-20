import React, { useState, useEffect } from 'react';
import History from './history.jsx';
import Keypad from './keypad.jsx';

const operators = {}

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [opsList, setOpsList] = useState([]);
  const [parens, setParens] = useState([]);

  return (
    <div className="calculator">
      <History />
      <div className="expression" >{expression}</div>
      <Keypad />
    </div>
  )
}

export default Calculator;