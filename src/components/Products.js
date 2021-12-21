import React, { Fragment } from "react";
import "../styles/Products.css";
import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <Fragment>
      <div className="productbackground">
        <h1 className="productmaintext">Termékeink</h1>
        <div className="productlist">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </Fragment>
  );
}
