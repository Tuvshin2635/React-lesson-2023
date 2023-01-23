import logo from "./logo.svg";
import "./App.css";
import Exercise from "./component/input";
import Anime from "./component/Anime";
import Button from "./component/Button";
import TopAnime from "./component/topAnime";
import Pascal from "./component/pascal";
import Pascals from "./component/pascal";
import PascalTriangle from "./component/pascal2";

function App() {
  return (
    <div className="App">
      {/* <Exercise />; */}
      <hr />
      <p />
      {/* <Anime />
      <Button />
      <TopAnime /> */}
      {/* <Pascal /> */}

      <PascalTriangle numRows={5} />
    </div>
  );
}

export default App;
