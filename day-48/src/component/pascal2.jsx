import React, { useState } from "react";

function PascalTriangle({ numRows }) {
  const [triangle, setTriangle] = useState([]);
  const [currentRow, setCurrentRow] = useState(1);

  function generateTriangle() {
    let newTriangle = [];
    for (let i = 0; i < numRows; i++) {
      newTriangle[i] = new Array(i + 1);
      for (let j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          newTriangle[i][j] = 1;
        } else {
          newTriangle[i][j] = newTriangle[i - 1][j - 1] + newTriangle[i - 1][j];
        }
      }
    }
    setTriangle(newTriangle);
  }

  function renderRow() {
    setCurrentRow((prevRow) => prevRow + 1);
  }

  return (
    <div>
      <button onClick={generateTriangle}>Generate Triangle</button>
      <button onClick={renderRow}>Render Next Row</button>
      <table>
        {triangle.slice(0, currentRow).map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PascalTriangle;
