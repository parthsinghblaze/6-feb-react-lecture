import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { productList } from "../productList";

function Product() {
  // useNavigate it will pass some additional data
  // useLocation it will collected the data that you have passed in navigate

  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="mb-3">Products</h1>
      <hr />
      {productList.map((item) => {
        const { id, name, desp, price } = item;

        return (
          <div
            key={id}
            className="p-3 mb-4 shadow border-1 rounded-3 d-flex justify-content-between"
          >
            <h4>{name}</h4>
            <button
              onClick={() => navigate(`/product/${id}`, { state: item })}
              className="btn btn-primary"
            >
              View Details
            </button>
            {/* <Link to={`/product/${id}`}>View Details</Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default Product;
