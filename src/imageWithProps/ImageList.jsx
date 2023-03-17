import React, { useState } from "react";
import Image from "./Image";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

let products = [
  {
    id: 1,
    img: img1,
    title: "Image 1",
  },
  {
    id: 2,
    img: img2,
    title: "Image 2",
  },
  {
    id: 3,
    img: img3,
    title: "Image 3",
  },
  {
    id: 4,
    img: img4,
    title: "Image 4",
  },
];

function ImageList() {
  const [productDetail, setProductDetail] = useState(products);

  function deletePro() {
    setProductDetail([]);
  }

  function showPro() {
    setProductDetail(products);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3">
        <h1>Total Images: {productDetail.length}</h1>
        <button className="btn btn-primary" onClick={deletePro}>
          Clear all products
        </button>
        <button className="btn btn-primary" onClick={showPro}>
          Show all products
        </button>
      </div>
      <div className="row">
        {productDetail.map((item) => {
          const { id, title, img } = item;
          return <Image key={id} title={title} img={img} />;
        })}
      </div>
    </div>
  );
}

export default ImageList;
