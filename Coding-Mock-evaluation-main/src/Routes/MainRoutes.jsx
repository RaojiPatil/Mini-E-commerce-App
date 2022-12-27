import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Productdetails from "../components/Product-details";
import Product from "../components/Product";
import Cart from "../components/Cart";
import { Navbar } from "../components/Navbar";
import Orders from "../components/Orders";

export const MainRoutes = ()=>{
    return(
        <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Product />} />
          <Route path="Product-details" element={<Productdetails />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}