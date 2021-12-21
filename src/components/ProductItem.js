import React from "react";
import kuki from "../images/kuki.jpg";
import "../styles/ProductItem.css";
export default function ProductItem() {
  return (
    <div className="productitemwrapper">
      <img src={kuki} alt="Kuki" className="productitemkep" />
      <h1 className="productitemmaintext">Kukihosszabito</h1>
      <h2 className="productitemsmalltext">26$</h2>
    </div>
  );
}
