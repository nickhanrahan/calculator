import React, { useEffect } from 'react';
import './style.css';

const History = ({ calculations, setExpression, expression }) => {

  useEffect(() => {
    document.getElementById('hist').scrollTop = document.getElementById('hist').scrollHeight;
  }, [calculations])

  return (
    <div className="history">
      <div id="hist" className="history-box">
        {calculations.map((calculation, i) => (
          <div key={`calc${i}`} className="calc">
            <div className="calc-expression" onClick={() => setExpression(expression + calculation.expression)}>{calculation.expression}</div>
            <div className="calc-solution" onClick={() => setExpression(expression + calculation.solution)}>{calculation.solution}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History;