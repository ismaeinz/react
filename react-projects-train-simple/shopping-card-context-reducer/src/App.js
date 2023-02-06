import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <h1>stop at 28:19</h1>
      <a href={"https://www.youtube.com/watch?v=HptuMAUaNGk&list=LL&index=6"}>
        Link
      </a>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
