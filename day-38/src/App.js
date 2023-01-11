import logo from "./logo.svg";
import "./App.css";
import Button from "./component/Button";
import Toolbar from "./component/Toolbar";
import ChildButton from "./component/ChildButton";
import PlayButton from "./component/PlayButton";
import UploadButton from "./component/UploadButton";
import ToolbarNext from "./component/ToolbarNext";
import ParentToolbar from "./component/ParentToolbar";
import SignUp from "./component/signUp";

function App() {
  return (
    <div className="App">
      <h1> Day38 React</h1>
      <Button />
      <Toolbar />
      <ChildButton />
      <UploadButton />
      <ToolbarNext />
      <ParentToolbar />
      <SignUp />
    </div>
  );
}

export default App;
