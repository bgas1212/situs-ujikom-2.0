import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <img src="src/assets/logo.png" alt="" className="logoNav" />
      <ul className="navbar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/product"}>Product</Link>
        </li>
      </ul>
    </div>
  );
}
