import React from "react";
import { Route, Routes } from "react-router-dom";
// import Cart from "../pages/Cart";
import Store from "../pages/Store";

function Direction(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Store />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
}

export default Direction;
