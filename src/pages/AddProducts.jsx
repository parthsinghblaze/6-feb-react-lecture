import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  price: "",
  category: "",
  qty: "",
};

function AddProducts() {
  function handleSubmit(values) {
    console.log("hello", values);
    alert("submitted");
  }

  const handleValidate = Yup.object().shape({
    name: Yup.string().required("Name is Require!"),
    price: Yup.number().required("Price is Require!"),
    category: Yup.string().required("Category is Require!"),
    qty: Yup.number()
      .min(5, "Qty should between 5 to 100")
      .max(100, "Qty should between 5 to 100")
      .required("Qty is Require!"),
  });

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-3 shadow">
          <h5 className="text-center mb-3">Add New Product</h5>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={handleValidate}
          >
            {({ errors }) => {
              console.log("errors", errors);
              return (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="name"
                      className={`form-control ${errors.name && "error"}`}
                      placeholder="Product Name"
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="name"
                      component="span"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="number"
                      name="price"
                      className={`form-control ${errors.price && "error"}`}
                      placeholder="Price"
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="price"
                      component="span"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="category"
                      className={`form-control ${errors.category && "error"}`}
                      placeholder="Category"
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="category"
                      component="span"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="number"
                      name="qty"
                      placeholder="Qty"
                      className={`form-control ${errors.qty && "error"}`}
                    />
                    <ErrorMessage
                      name="qty"
                      className="text-danger"
                      component="span"
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
