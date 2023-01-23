import logo from "./logo.svg";
import "./App.css";
import Exercise from "./component/input";
import Anime from "./component/Anime";
import Button from "./component/Button";
import TopAnime from "./component/topAnime";

function App() {
  return (
    <div className="App">
      <Exercise />;
      <hr />
      <p />
      <Anime />
      <Button />
      <TopAnime />
      <UpOutlined />
      <BarChartOutlined />
    </div>
  );
}

export default App;
