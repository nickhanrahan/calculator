import React from 'react';
import './style.css';

const Keypad = ({ handleButtonPress }) => {

  return (
    <div className="keypad">
      <div className="keyrow">
        <div className="keycol-1-5"><button value="(" className="open-p-btn" onClick={handleButtonPress}>(</button></div>
        <div className="keycol-2-5"><button value="7" className="seven-btn" onClick={handleButtonPress}>7</button></div>
        <div className="keycol-3-5"><button value="8" className="eight-btn" onClick={handleButtonPress}>8</button></div>
        <div className="keycol-4-5"><button value="9" className="nine-btn" onClick={handleButtonPress}>9</button></div>
        <div className="keycol-5-5"><button value="/" className="divide-btn" onClick={handleButtonPress}>&divide;</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button value=")" className="close-p-btn" onClick={handleButtonPress}>)</button></div>
        <div className="keycol-2-5"><button value="4" className="four-btn" onClick={handleButtonPress}>4</button></div>
        <div className="keycol-3-5"><button value="5" className="five-btn" onClick={handleButtonPress}>5</button></div>
        <div className="keycol-4-5"><button value="6" className="six-btn" onClick={handleButtonPress}>6</button></div>
        <div className="keycol-5-5"><button value="*" className="times-btn" onClick={handleButtonPress}>&times;</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button value="C" className="clear-btn" >C</button></div>
        <div className="keycol-2-5"><button value="1" className="one-btn" onClick={handleButtonPress}>1</button></div>
        <div className="keycol-3-5"><button value="2" className="two-btn" onClick={handleButtonPress}>2</button></div>
        <div className="keycol-4-5"><button value="3" className="three-btn" onClick={handleButtonPress}>3</button></div>
        <div className="keycol-5-5"><button value="-" className="minus-btn" onClick={handleButtonPress}>-</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button value="" className="idk-btn" ></button></div>
        <div className="keycol-2-5"><button value="0" className="zero-btn" onClick={handleButtonPress}>0</button></div>
        <div className="keycol-3-5"><button value="." className="point-btn" onClick={handleButtonPress}>.</button></div>
        <div className="keycol-4-5"><button value="=" className="equal-btn" >=</button></div>
        <div className="keycol-5-5"><button value="+" className="plus-btn" onClick={handleButtonPress}>+</button></div>
      </div>
    </div>
  )
}

export default Keypad;