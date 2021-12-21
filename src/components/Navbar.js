import React from "react";
import logo from "../images/logo.png";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbarlogo" />
      <div className="navlinks">
        <a className="navbarlink">Home</a>
        <a className="navbarlink">About</a>
        <a className="navbarlink">Products</a>
        <a className="navbarlink">Contact</a>
        <a className="navbarsignuplink">Sign Up</a>
      </div>
    </div>
  );
}
