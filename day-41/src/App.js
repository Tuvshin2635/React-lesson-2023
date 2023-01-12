import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./Component/MainFunc";
import { useState } from "react";
import Counter from "./Component/Counter";
import UpdateArrays, { List } from "./Component/UpdateArrays";
import UpdatingObjects from "./Component/UpdatingObjects";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleInput = function (event) {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      {/* <MainHeader />
      <div id="ex1">
        <p> {counter} </p>
        <button onClick={handleClick}> Click </button>
      </div> */}

      {/* <div id="ex2">
        <p> {inputText}</p>
        <input
          value={inputText}
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </div> */}
      {/* < Counter />

      <UpdateArrays /> */}

      <List />
      <UpdatingObjects />
      
    </div>
  );


}

export default App;
