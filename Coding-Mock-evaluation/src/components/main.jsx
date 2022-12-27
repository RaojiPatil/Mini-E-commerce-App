
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import LogIn from "./LogIn";
import { Navbar } from "./Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="LogIn" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

