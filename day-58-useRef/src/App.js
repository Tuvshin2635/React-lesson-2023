// import { useContext } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
// import InputFocus from "./components/InputFocus";

// import List from "./components/List";
// import Stopwatch from "./components/StopWatch";

// import { ImageContext } from "./context/ImageContext";

function App() {
  // const [isLarge, setIsLarge] = useState(false);

  // const imageSize = !isLarge ? 150 : 100;

  // const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
  return (
    <div className="App">
      <h1> DAY 58 useREF</h1>

      <VideoPlayer />
      {/* <InputFocus /> */}

      {/* <Stopwatch /> */}

      {/* <label>
        Use large Images
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        ></input>
      </label>
      <hr />
      <List /> */}
    </div>
  );
}

export default App;
