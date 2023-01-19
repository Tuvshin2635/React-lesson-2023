import "./App.css";
import { Outlet } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [wishList, setWishList] = useState([]); //hooson array yamar negen bvteegdeccinuug hadgalna

  return (
    <div>
      <Header wishList={wishList} setWishList={setWishList} />
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList wishList={wishList} setWishList={setWishList} /> //product tsaashaa xaruulax ystoi bolxoor end ugnu
            }
          />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
