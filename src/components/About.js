import React, { Fragment } from "react";
import "../styles/About.css";
import fishshop from "../images/fishshop.jpg";
export default function About() {
  return (
    <Fragment>
      <div className="aboutbackground">
        <h1 className="aboutmaintext">Rólunk</h1>
        <div className="oneline">
          <div className="aboutsmalltexts">
            <p className="aboutsmalltext">
              A mi cégünk a legjobb mert Andris vezeti és ő hires a jó üzleti
              érzékéről.
            </p>
            <p className="aboutsmalltext">
              Khaled meg próbálja lebeszélni a faszkodásról, de ő csak a
              puncikra hallgat.
            </p>
          </div>

          <img src={fishshop} alt="fishshop" className="aboutfishshop" />
        </div>
      </div>
    </Fragment>
  );
}
