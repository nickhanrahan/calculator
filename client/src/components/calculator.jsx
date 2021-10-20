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

  const handleExpChange = (event) => {
    setExpression(event.target.value);
    let newCurIndex = curIndex;
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      newCurIndex--;
    } else {
      newCurIndex++;
    }
    setCurIndex(newCurIndex)
  }

  return (
    <div className="calculator">
      <History />
      <div className="expression" >
        <div className="left-block"></div>
        <input className="exp-text" value={expression} onChange={handleExpChange}/>
      </div>
      <Keypad handleButtonPress={handleButtonPress}/>
    </div>
  )
}

export default Calculator;