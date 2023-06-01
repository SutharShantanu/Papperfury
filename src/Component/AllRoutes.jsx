import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Furniture from "../Pages/Furniture";
import SingleProductPage from '../Pages/SingleProductPage';
import PaymentForm from '../Pages/PaymentForm';
import OrderSuccessful from '../Pages/OrderSuccessful';
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/furniture" element={<Furniture />} ></Route>
      <Route path="/product/:id" element={<SingleProductPage />} ></Route>
      {/* wrap below in privateroute */}
      <Route path="/cart" element={<Cart />} ></Route>

      <Route path="/payment" element={<PaymentForm />} ></Route>
      <Route path="/successful" element={<OrderSuccessful />} ></Route>

      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
    </Routes>
  )
}

export default AllRoutes;