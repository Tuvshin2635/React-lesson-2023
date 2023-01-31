import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import SideBar from "./pages/sideBar";

function App() {
  return (
    <div className="App">
      <h1> ADMIIN PANEL PROJECT MT </h1>
      <SideBar />
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
