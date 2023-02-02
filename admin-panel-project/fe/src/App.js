import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import SideBar from "./pages/sideBar";
import Product from "./pages/Product";
import { flexbox } from "@mui/system";
import CreatNewUser from "./components/CreatNewUser";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <div className="App">
      {/* <h1> ADMIN PANEL PROJECT MT </h1> */}
      <SideBar />
      {/* <UsersTable /> */}
      {/* <CreatNewUser /> */}

      {/* <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/product" element={<Product />} />
        <Route path="/creatNewUser" element={<CreatNewUser />} />
      </Routes> */}
    </div>
  );
}

export default App;
