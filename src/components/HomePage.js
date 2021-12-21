import React, { Fragment } from "react";
import Navbar from "./Navbar";
import fishing from "../images/fishing.jfif";
import "../styles/HomePage.css";
export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <div className="homemaincomponent">
        <div className="homemaintexts">
          <h1 className="homebigtext">Asefish</h1>
          <h2 className="homealttext">Magyarország legjobb horgászáruháza</h2>
        </div>
        <img src={fishing} alt="fishing" className="homefishingimage" />
      </div>
    </Fragment>
  );
}
