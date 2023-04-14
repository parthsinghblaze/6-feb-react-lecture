import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  productName: "",
  price: "",
  category: "",
  qty: "",
};

function AddProducts() {
  function handleSubmit(values) {
    console.log("hello", values);
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-3 shadow">
          <h5 className="text-center mb-3">Add New Product</h5>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {() => {
              return (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="productName"
                      className="form-control"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="price"
                      className="form-control"
                      placeholder="Price"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="category"
                      className="form-control"
                      placeholder="Category"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="qty"
                      placeholder="Qty"
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
          {/* <form action="">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Product Name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Price" className="form-control" />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Category"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Qty" className="form-control" />
            </div>
            <button className="btn btn-dark w-100">Add Product</button>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
