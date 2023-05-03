import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/loginSlice";
import { useNavigate } from "react-router-dom";

const handleValidate = Yup.object().shape({
  email: Yup.string().required("Email is Require!"),
  password: Yup.number().required("Password is Require!"),
});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.login);

  function handleSubmit(values) {
    dispatch(login({ values, navigate }));
  }

  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-3">
            <h5 className="text-center mb-3">Login</h5>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={handleValidate}
              enableReinitialize="true"
            >
              {({ errors }) => {
                return (
                  <Form>
                    <div className="mb-3">
                      <Field
                        type="text"
                        name="email"
                        className={`form-control ${errors.email && "error"}`}
                        placeholder="Enter Email"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="email"
                        component="span"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        type="password"
                        name="password"
                        className={`form-control ${errors.password && "error"}`}
                        placeholder="Enter password"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="password"
                        component="span"
                      />
                    </div>

                    <button type="submit" className="btn btn-dark">
                      {isLoading ? "processing..." : "Login"}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
