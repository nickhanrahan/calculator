import React, { useEffect } from 'react';
import './style.css';

const History = ({ calculations, setExpression }) => {

  useEffect(() => {
    document.getElementById('hist').scrollTop = document.getElementById('hist').scrollHeight;
  }, [calculations])

  return (
    <div className="history">
      <div id="hist" className="history-box">
        {calculations.map((calculation, i) => (
          <div key={`calc${i}`} className="calc">
            <div className="calc-expression" onClick={(e) => setExpression(calculation.expression)}>{calculation.expression}</div>
            <div className="calc-solution">{calculation.solution}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History;