import { render } from "@testing-library/react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css"


export const Navbar = () => {
  
  return (
    
    <>
    <div className="navbar">
      <h2>
      <Link to="/" id="home">Home</Link>
      <Link to="/Product" id="Product">Product</Link>
      <Link to="/LogIn" id="LogIn">LogIn</Link>
      </h2>
    </div>
    <Outlet />
  </>
  );
};

