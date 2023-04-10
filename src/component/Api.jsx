import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/api";

function Api() {
  const dispatch = useDispatch();

  const { isLoading, products } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h2>Api Calling</h2>
      {products.map((item) => {
        const { title, id } = item;
        return <h1 key={id}>{title}</h1>;
      })}
    </div>
  );
}

export default Api;
