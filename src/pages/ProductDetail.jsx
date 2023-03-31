import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { productList } from "../productList";

function ProductDetail() {
  const myProductId = useParams();
  const { id } = myProductId;
  const [productDetail, setProductDetail] = useState({});

  const data = useLocation();
  const { state } = data;
  useEffect(() => {
    // const findProduct = productList.find((item) => item.id === Number(id));
    setProductDetail(state);
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-3">Products Details {id} </h1>
      <hr />
      <h2>{productDetail.name}</h2>
      <h4> {productDetail.price} </h4>
      <p>{productDetail.desp}</p>
    </div>
  );
}

export default ProductDetail;
