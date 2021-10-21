import React from 'react';
import './style.css';

const Calculations = () => {

  const operators = {
    '*': function(a, b) { return (a * b).toString() },
    '/': function(a, b) { return (a / b).toString() },
    '+': function(a, b) { return (a + b).toString() },
    '-': function(a, b) { return (a - b).toString() },
  }

  const solveString = (str) => {
    let expressionArray = [];
    let curElement = '';
    for (let x = 0; x < str.length; x++) {
      if (str[x] === ' ') continue;
      if (operators[str[x]] || str[x] === '(' || str[x] === ')') {
        if (curElement) expressionArray.push(curElement);
        expressionArray.push(str[x]);
        curElement = '';
      } else {
        curElement += str[x];
      }
    }
    if (curElement) expressionArray.push(curElement);
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
    if (open && close) {
      arr.splice(open, close - open + 1, solveArray(arr.slice(open + 1, close)));
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
        if (arr[j] === opOne) arr.splice(j - 1, 3, operators[opOne](parseFloat(arr[j - 1]), parseFloat(arr[j + 1])));
        if (arr[j] === opTwo) arr.splice(j - 1, 3, operators[opTwo](parseFloat(arr[j - 1]), parseFloat(arr[j + 1])));
        j--;
      }
    }
    return arr;
  }

  return (
    <div className="calcs">
      <div className="calcs-box"></div>
    </div>
  )
}

export default Calculations;