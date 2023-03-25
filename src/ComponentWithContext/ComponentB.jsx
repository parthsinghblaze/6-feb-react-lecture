import React, { useContext } from "react";
import { WrapperContext } from "../App";
import ComponentC from "./ComponentC";

function ComponentB() {
  const data = useContext(WrapperContext);

  console.log("data", data);

  const { product, setProduct } = data;

  return (
    <>
      <ComponentC />
      <h4>Product Listing</h4>
      <hr />
      {product.map((item, index) => {
        return <h3 key={index}>{item}</h3>;
      })}
      <button onClick={() => setProduct([])}>Clear</button>
    </>
  );
}

export default ComponentB;
