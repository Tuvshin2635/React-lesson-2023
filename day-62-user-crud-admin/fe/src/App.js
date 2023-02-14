import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserRegisterForm from "./components/UserRegisterForm";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1> Day-62 USER LOGIN CRUD </h1>

      <Routes>
        <Route path="/" />
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
