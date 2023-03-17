import React from "react";

function Image(props) {
  const { img, title } = props;

  return (
    <div className="col-md-4 mb-5">
      <div className="card">
        <img
          src={img}
          height="250px"
          style={{ objectFit: "cover", width: "100%" }}
        />
        <div className="card-body">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Image;
