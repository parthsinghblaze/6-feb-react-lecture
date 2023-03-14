import React, { useState } from "react";

function ArrayState(props) {
  console.log("props", props);

  const [productList, setProductList] = useState([
    "Toy",
    "Car",
    "Tablet",
    "Mobile",
  ]);

  return (
    <div className="container">
      <div className="card mb-5">
        <div className="card-header d-flex justify-content-between">
          <h2>Array Example</h2>
        </div>
        <div className="card-body">
          <h1>My name is : {props.user}</h1>
          {productList.map((singleProduct, index, array) => {
            return <h2 key={index}>{singleProduct}</h2>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ArrayState;
