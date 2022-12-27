import { render } from "@testing-library/react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css"


export const Navbar = () => {
  
  return (
    
    <>
    <div className="navbar">
      <h2>
      <Link to="/" id="Product">Product</Link>
      <Link to="/Product-details" id="Product-details">Product-details</Link>
      <Link to="/Cart" id="Cart">Cart</Link>
      <Link to="/Orders" id="Orders">Orders</Link>
      </h2>
    </div>
    <Outlet />
  </>
  );
};

