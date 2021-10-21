import React from 'react';
import './style.css';

const History = ({ calculations }) => {

  return (
    <div className="history">
      <div className="history-box">
        {calculations.map((calculation, i) => (
          <div key={`calc${i}`} className="calc">
            <div className="calc-expression">{calculation.expression}</div>
            <div className="calc-solution">{calculation.solution}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History;