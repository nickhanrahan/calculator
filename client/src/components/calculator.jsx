import React, { useState } from 'react';
import History from './history.jsx';
import Keypad from './keypad.jsx';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [operators, setOperators] = useState([]);
  const [parens, setParens] = useState([]);

  return (
    <div className="calculator">
      <History />
      <div className="expression">{expression}</div>
      <Keypad />
    </div>
  )
}

export default Calculator;