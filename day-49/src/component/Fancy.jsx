import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Exercise";
import { useState } from "react";

function App() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        is Fancy styling
      </label>
    </div>
  );
}

export default App;
