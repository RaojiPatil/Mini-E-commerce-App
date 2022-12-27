import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Product from "../components/Product";
import LogIn from "../components/LogIn";
import { Navbar } from "../components/Navbar";

export const MainRoutes = ()=>{
    return(
        <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="LogIn" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}