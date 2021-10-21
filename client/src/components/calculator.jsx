import React, { useState, useEffect } from 'react';
import History from './history.jsx';
import Keypad from './keypad.jsx';

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

  const operators = {
    '*': function(a, b) { return (a * b).toString() },
    '/': function(a, b) { return (a / b).toString() },
    '+': function(a, b) { return (a + b).toString() },
    '-': function(a, b) { return (a - b).toString() },
  }

  const solve = (arr) => {
    //PARENTHESES
    let open;
    let close;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(' && !open) open = i;
      if (arr[i] === ')') close = i;
    }
    if (open && close) {
      arr.splice(open, close - open + 1, solve(arr.slice(open + 1, close)));
    }
    //MULTIPLY&DIVIDE
    arr = dualOp(arr, '*', '/');
    //ADD&SUBTRACT
    arr = dualOp(arr, '+', '-');

    return arr.length === 1 ? arr[0] : false;
  }

  const dualOp = (arr, opOne, opTwo) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === opOne || arr[j] === opTwo) {
        if (arr[j] === opOne) arr.splice(j - 1, 3, operators[opOne](parseFloat(arr[j - 1]), parseFloat(arr[j + 1])))
        if (arr[j] === opTwo) arr.splice(j - 1, 3, operators[opTwo](parseFloat(arr[j - 1]), parseFloat(arr[j + 1])))
        j--;
      }
    }
    return arr;
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