import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Furniture from "../Pages/Furniture";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/furniture" element={<Furniture />} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
    </Routes>
  )
}

export default AllRoutes;