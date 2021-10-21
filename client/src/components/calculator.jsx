import React, { useState, useEffect } from 'react';
import History from './history.jsx';
import Keypad from './keypad.jsx';

const operators = {}

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [expressionArray, setExpressionArray] = useState([]);
  const [curCharacter, setCur] = useState('');
  const [curIndex, setCurIndex] = useState(0);

  const handleKeyPadInput = (event) => {
    const newExpression = expression + event.target.value;
    const newCurIndex = curIndex + 1;
    setExpression(newExpression);
    setCurIndex(newCurIndex);
  }

  const handleInputChange = (event) => {
    setExpression(event.target.value);
    let newCurIndex = curIndex;
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      newCurIndex--;
    } else {
      newCurIndex++;
    }
    setCurIndex(newCurIndex)
  }

  const solve = (arr) => {
    //populate a lists for each operator, first open paren, last close paren
    let open;
    let close;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(' && !open) open = i;
      if (arr[i] === ')') close = i;
    }
    //begin operations in PEMDAS order
    //Parens: call solve recursively on the string created between parens first. splice result into array
    if (open && close) {
      arr.splice(open, close - open + 1, solve(arr.slice(open + 1, close)));
    }
    //MULTIPLY&DIVIDE
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] === '*' || arr[x] === '/') {
        if (arr[x] === '*') arr.splice(x - 1, 3, (parseFloat(arr[x - 1]) * parseFloat(arr[x + 1])).toString());
        if (arr[x] === '/') arr.splice(x - 1, 3, (parseFloat(arr[x - 1]) / parseFloat(arr[x + 1])).toString());
        x--;
      }
    }
    //ADD&SUBTRACT
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === '+' || arr[j] === '-') {
        if (arr[j] === '+') arr.splice(j - 1, 3, (parseFloat(arr[j - 1]) + parseFloat(arr[j + 1])).toString());
        if (arr[j] === '-') arr.splice(j - 1, 3, (parseFloat(arr[j - 1]) - parseFloat(arr[j + 1])).toString());
        j--;
      }
    }

    return arr.length === 1 ? arr[0] : false;

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