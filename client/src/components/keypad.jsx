import React from 'react';
import './style.css';

const Keypad = () => {
  return (
    <div className="keypad">
      <div className="keyrow">
        <div className="keycol-1-5"><button className="open-p-btn">(</button></div>
        <div className="keycol-2-5"><button className="seven-btn">7</button></div>
        <div className="keycol-3-5"><button className="eight-btn">8</button></div>
        <div className="keycol-4-5"><button className="nine-btn">9</button></div>
        <div className="keycol-5-5"><button className="divide-btn">&divide;</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button className="close-p-btn">)</button></div>
        <div className="keycol-2-5"><button className="four-btn">4</button></div>
        <div className="keycol-3-5"><button className="five-btn">5</button></div>
        <div className="keycol-4-5"><button className="six-btn">6</button></div>
        <div className="keycol-5-5"><button className="times-btn">&times;</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button className="clear-btn">C</button></div>
        <div className="keycol-2-5"><button className="one-btn">1</button></div>
        <div className="keycol-3-5"><button className="two-btn">2</button></div>
        <div className="keycol-4-5"><button className="three-btn">3</button></div>
        <div className="keycol-5-5"><button className="minus-btn">-</button></div>
      </div>
      <div className="keyrow">
        <div className="keycol-1-5"><button className="idk-btn"></button></div>
        <div className="keycol-2-5"><button className="zero-btn">0</button></div>
        <div className="keycol-3-5"><button className="point-btn">.</button></div>
        <div className="keycol-4-5"><button className="equal-btn">=</button></div>
        <div className="keycol-5-5"><button className="plus-btn">+</button></div>
      </div>
    </div>
  )
}

export default Keypad;