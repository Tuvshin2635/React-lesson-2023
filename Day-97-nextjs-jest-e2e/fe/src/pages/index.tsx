import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function add() {
    setResult(num1 + num2);
  }

  function subtract() {
    setResult(num1 - num2);
  }

  function multiply() {
    setResult(num1 * num2);
  }

  function divide() {
    setResult(num1 / num2);
  }

  return (
    <div className="container">
      <input
        className="input"
        data-testid="num1"
        value={num1}
        // type="number"
        onChange={(event: any) => {
          setNum1(Number(event.target.value));
        }}
      />
      <input
        className="input"
        value={num2}
        // type="number"w
        data-testid="num2"
        onChange={(event: any) => {
          setNum2(Number(event.target.value));
        }}
      />
      <p className="result" data-testid="result">
        {result}{" "}
      </p>

      <button data-testid="add" className="button" onClick={add}>
        ADD
      </button>
      <button data-testid="subtract" className="button" onClick={subtract}>
        subtract
      </button>
      <button data-testid="multiply" className="button" onClick={multiply}>
        multiply
      </button>
      <button data-testid="divide" className="button" onClick={divide}>
        divide
      </button>
    </div>
  );
}
