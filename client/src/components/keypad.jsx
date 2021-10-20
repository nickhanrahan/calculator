import React from 'react';
import './style.css';

const Keypad = ({ handleKeyPadInput }) => {

  return (
    <div className="keypad">
      <div className="keyrow">
        <div className="keycol-1-5"><button value="(" className="open-p-btn" onClick={handleKeyPadInput}>(</button></div>
        <div className="keycol-2-5"><button value="7" className="seven-btn" onClick={handleKeyPadInput}>7</button></div>
        <div className="keycol-3-5"><button value="8" className="eight-btn" onClick={handleKeyPadInput}>8</button></div>
        <div className="keycol-4-5"><button value="9" className="nine-btn" onClick={handleKeyPadInput}>9</button></div>
        <div className="keycol-5-5"><button value="/" className="divide-btn" onClick={handleKeyPadInput}>&divide;</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button value=")" className="close-p-btn" onClick={handleKeyPadInput}>)</button></div>
        <div className="keycol-2-5"><button value="4" className="four-btn" onClick={handleKeyPadInput}>4</button></div>
        <div className="keycol-3-5"><button value="5" className="five-btn" onClick={handleKeyPadInput}>5</button></div>
        <div className="keycol-4-5"><button value="6" className="six-btn" onClick={handleKeyPadInput}>6</button></div>
        <div className="keycol-5-5"><button value="*" className="times-btn" onClick={handleKeyPadInput}>&times;</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button value="C" className="clear-btn" >C</button></div>
        <div className="keycol-2-5"><button value="1" className="one-btn" onClick={handleKeyPadInput}>1</button></div>
        <div className="keycol-3-5"><button value="2" className="two-btn" onClick={handleKeyPadInput}>2</button></div>
        <div className="keycol-4-5"><button value="3" className="three-btn" onClick={handleKeyPadInput}>3</button></div>
        <div className="keycol-5-5"><button value="-" className="minus-btn" onClick={handleKeyPadInput}>-</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button value="" className="idk-btn" ></button></div>
        <div className="keycol-2-5"><button value="0" className="zero-btn" onClick={handleKeyPadInput}>0</button></div>
        <div className="keycol-3-5"><button value="." className="point-btn" onClick={handleKeyPadInput}>.</button></div>
        <div className="keycol-4-5"><button value="=" className="equal-btn" >=</button></div>
        <div className="keycol-5-5"><button value="+" className="plus-btn" onClick={handleKeyPadInput}>+</button></div>
      </div>
    </div>
  )
}

export default Keypad;