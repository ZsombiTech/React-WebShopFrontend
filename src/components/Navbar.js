import React from "react";
import logo from "../images/logo.png";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbarlogo" />
      <div className="navlinks">
        <a className="navbarlink">Főoldal</a>
        <a className="navbarlink">Rólunk</a>
        <a className="navbarlink">Termékek</a>
        <a className="navbarlink">Kapcsolat</a>
        <a className="navbarsignuplink">Regisztráció</a>
      </div>
    </div>
  );
}
