import React, { Fragment } from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <Fragment>
      <div className="contactbackground">
        <h1 className="contactmaintext">Kapcsolat</h1>
        <div className="oneline2">
          <div className="contactcolumn1">
            <h1 className="contactcolumn1maintext">Kapcsolat</h1>
            <p className="contactcolumn1smalltext">Asefish</p>
            <p className="contactcolumn1smalltext">xyz@gmail.com</p>
            <div className="oneline">
              <p className="contactcolumn1smalltext">06777777777</p>
            </div>
          </div>
          <div className="contactcolumn2">
            <h1 className="contactcolumn2maintext">Kérdésed van?</h1>
            <p className="contactcolumn2smalltext">
              Telefonos és írásos ügyfélszolgálatunk munkanapokon 9 és 17 óra
              között érhető el.
            </p>
            <label className="contactformlabel">Név *</label>
            <input type="text" id="contactforminput" />
            <label className="contactformlabel">Email *</label>
            <input type="email" id="contactforminput" />
            <label className="contactformlabel">Telefonszám *</label>
            <input type="number" id="contactforminput" />
            <label className="contactformlabel">Üzenet *</label>
            <input type="text" id="contactforminput" />
            <input type="submit" id="contactsubmitform" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
