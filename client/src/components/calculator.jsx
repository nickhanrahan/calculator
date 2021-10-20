import React, { useState, useEffect } from 'react';
import History from './history.jsx';
import Keypad from './keypad.jsx';

const operators = {}

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [curIndex, setCurIndex] = useState(0);
  const [opsList, setOpsList] = useState([]);
  const [parens, setParens] = useState([]);

  const handleButtonPress = (event) => {
    const newExpression = expression + event.target.value;
    const newCurIndex = curIndex + 1;
    setExpression(newExpression);
    setCurIndex(newCurIndex);
  }

  return (
    <div className="calculator">
      <History />
      <div className="expression" >
        <div className="left-block"></div>
        <div className="exp-text">{expression}</div>
      </div>
      <Keypad handleButtonPress={handleButtonPress}/>
    </div>
  )
}

export default Calculator;