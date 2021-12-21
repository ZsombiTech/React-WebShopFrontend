import React, { Fragment } from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <Fragment>
      <div className="contactbackground">
        <h1 className="contactmaintext">Kapcsolat</h1>
        <div className="oneline2">
          <div className="contactcolumn1">
            <h1>Kapcsolat</h1>
            <p>Asefish</p>
            <p>xyz@gmail.com</p>
            <p>06777777777</p>
          </div>
          <div className="contactcolumn2">
            <h1>Kérdésed van?</h1>
            <p>
              Telefonos és írásos ügyfélszolgálatunk munkanapokon 9 és 17 óra
              között érhető el.
            </p>
            <label>Név*</label>
            <input type="text" />
            <label>Email*</label>
            <input type="email" />
            <label>Telefonszám*</label>
            <input type="number" />
            <label>Üzenet*</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
