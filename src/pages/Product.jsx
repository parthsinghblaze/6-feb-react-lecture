import React from "react";
import { Link } from "react-router-dom";
import { productList } from "../productList";

function Product() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">Products</h1>
      <hr />
      {productList.map((item) => {
        const { id, name } = item;

        return (
          <div
            key={id}
            className="p-3 mb-4 shadow border-1 rounded-3 d-flex justify-content-between"
          >
            <h4>{name}</h4>
            <Link to={`/product/${id}`}>View Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
