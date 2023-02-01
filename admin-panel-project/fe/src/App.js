import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import SideBar from "./pages/sideBar";
import ResponsiveDrawer from "./pages/sideBar";
import Product from "./pages/Product";
import { flexbox } from "@mui/system";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      {/* <h1> ADMIN PANEL PROJECT MT </h1> */}
      {/* <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/product" element={<Product />} />
        </Routes> */}
    </div>
  );
}

export default App;
