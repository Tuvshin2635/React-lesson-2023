import React from "react";

export default function Pascal() {
  function pascalTriangle(numRows) {
    var triangle = [];
    for (var i = 0; i < numRows; i++) {
      triangle[i] = new Array(i + 1);
      for (var j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
    return triangle;
  }

  return (
    <div>
      <h1> Pascal </h1>
      {/* {pascals && pascals.map} */}
    </div>
  );
}
