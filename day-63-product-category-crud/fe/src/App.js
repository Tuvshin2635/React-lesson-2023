import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import CategoryForm from "./components/CategoryForm";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <h1> Day 63 CATEGORY crud</h1>
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit" element={null} />
        <Route path="/category/delete/:id" element={null} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
