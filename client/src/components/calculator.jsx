import React, { useState, useEffect } from 'react';
import History from './history.jsx';
import Keypad from './keypad.jsx';

const operators = {}

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [curIndex, setCurIndex] = useState(0);
  const [opsList, setOpsList] = useState([]);
  const [parens, setParens] = useState([]);

  const handleKeyPadInput = (event) => {
    const newExpression = expression + event.target.value;
    const newCurIndex = curIndex + 1;
    setExpression(newExpression);
    setCurIndex(newCurIndex);
  }

  const handleInputChange = (event) => {
    setExpression(event.target.value);
    let newCurIndex = curIndex;
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      newCurIndex--;
    } else {
      newCurIndex++;
    }
    setCurIndex(newCurIndex)
  }

  const solve = (string) => {
    console.log(string);
  }

  return (
    <div className="calculator">
      <History />
      <div className="expression" >
        <div className="left-block"></div>
        <input className="exp-text" value={expression} onChange={handleInputChange}/>
      </div>
      <Keypad handleKeyPadInput={handleKeyPadInput}/>
    </div>
  )
}

export default Calculator;