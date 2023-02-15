import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserRegisterForm from "./components/UserRegisterForm";
import Users from "./components/Users";
import { Button } from "@mui/material";
import LoginForm from "./components/loginForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1> Day-62 USER LOGIN CRUD </h1>
      <Button to={"/"}> HOME </Button>
      <Button to={"/users"}> USER </Button>
      <Button to={"/login"}> Login </Button>
      <Button to={"/register"}> Register </Button>

      <Routes>
        <Route path="/" />
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
