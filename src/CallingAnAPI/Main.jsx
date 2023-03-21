import React, { useState, useEffect } from "react";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [loadingView, setLoadingView] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("error", e);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="container">
          <div className="row">
            {loadingView.map((item, index) => {
              return (
                <div className="col-md-4 mb-5" key={index}>
                  <div className="card" aria-hidden="true">
                    <div className="card-body">
                      <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                      </h5>
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
      //   <div
      //     style={{
      //       height: "100vh",
      //       width: "100%",
      //       display: "flex",
      //       justifyContent: "center",
      //       alignItems: "center",
      //     }}
      //   >
      //     <div className="spinner-border" role="status">
      //       <span className="visually-hidden">Loading...</span>
      //     </div>
      //   </div>
    );
  }

  return (
    <div className="container">
      <h3>Total Products: {products.length}</h3>
      <div className="row">
        {products.map((item) => {
          const { title, price, description, image, id } = item;
          return (
            <div className="col-6 col-md-4 mb-5" key={id}>
              <div className="card">
                <img
                  src={image}
                  className="w-100"
                  style={{ height: "300px", objectFit: "cover" }}
                  alt=""
                />
                <div className="card-body">
                  <h3 title={title} className="text-truncate">
                    {title}
                  </h3>
                  <p className="text-truncate">{description}</p>
                  <p>Price: {price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
