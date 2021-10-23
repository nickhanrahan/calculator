import React, { useState, useEffect } from 'react';
import History from './history.jsx';
import Keypad from './keypad.jsx';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [calculations, setCalculations] = useState([]);

  const handleKeyPadInput = (event) => {
    const newExpression = expression + event.target.value;
    setExpression(newExpression);
  }

  const handleInputChange = (event) => {
    setExpression(event.target.value);
  }

  const operators = {
    '*': function(a, b) { return (a * b) },
    '/': function(a, b) { return (a / b) },
    '+': function(a, b) { return (a + b) },
    '-': function(a, b) { return (a - b) },
    '^': function(a, b) { return (a ** b) },
    '√': function(a) { return (Math.sqrt(a)) },
  }

  const solveString = (str) => {
    let expressionArray = [];
    let curElement = '';
    for (let x = 0; x < str.length; x++) {
      if (str[x] === ' ') continue;
      if (operators[str[x]] || str[x] === '(' || str[x] === ')') {
        if (curElement) expressionArray.push(parseFloat(curElement));
        expressionArray.push(str[x]);
        curElement = '';
      } else {
        curElement += str[x];
      }
    }
    if (curElement) expressionArray.push(parseFloat(curElement));
    return solveArray(expressionArray);
  }

  const solveArray = (arr) => {
    //PARENTHESES
    let open;
    let close;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(' && !open) open = i;
      if (arr[i] === ')') close = i;
    }
    if (open !== null && close) {
      arr.splice(open, close - open + 1, solveArray(arr.slice(open + 1, close)));
    }
    //EXPONENT/SQRT
    for (let n = arr.length - 1; n >= 0; n--) {
      if (arr[n] === '^' || arr[n] === '√') {
        if (arr[n] === '^') arr.splice(n - 1, 3, operators['^'](arr[n - 1], arr[n + 1]));
        if (arr[n] === '√') arr.splice(n, 2, operators['√'](arr[n + 1]));
        n++;
      }
    }
    //MDAS
    arr = dualOp(dualOp(arr, '*', '/'), '+', '-');

    return arr.length === 1 ? arr[0].toString() : 'Error';
  }

  const dualOp = (arr, opOne, opTwo) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === opOne || arr[j] === opTwo) {
        if (arr[j] === opOne) arr.splice(j - 1, 3, operators[opOne](arr[j - 1], arr[j + 1]));
        if (arr[j] === opTwo) arr.splice(j - 1, 3, operators[opTwo](arr[j - 1], arr[j + 1]));
        j--;
      }
    }
    return arr;
  }

  const execute = (event) => {
    event.preventDefault();
    if (!expression) return;
    let newCalculations = [...calculations]
    let solution = solveString(expression) || 'Error'
    let calculation = {
      expression: expression,
      solution: solution,
    }
    newCalculations.push(calculation);
    setCalculations(newCalculations);
    setExpression('');
  }

  return (
    <div className="calculator">
      <History calculations={calculations} setExpression={setExpression} />
      <div className="expression" >
        <form onSubmit={execute}>
          <input className="exp-text" value={expression} onChange={handleInputChange}/>
        </form>
      </div>
      <Keypad handleKeyPadInput={handleKeyPadInput} execute={execute} setExpression={setExpression} />
    </div>
  )
}

export default Calculator;