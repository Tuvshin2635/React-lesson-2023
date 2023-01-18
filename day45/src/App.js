import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accordion from "./component/Accordion";
import Login from "./component/Login";
import { ToastContainer, toast } from "react-toastify";
import Home from "./component/Home";
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <button to="{<Home/> }"> HOME </button> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
      {/* <Accordion /> */}
      {/* <Login /> */}
      {/* <Home /> */}

      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
