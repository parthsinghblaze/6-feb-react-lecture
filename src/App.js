import { Alert } from "react-bootstrap";
import React from "react";
import Layout from "./commonComponent/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProducts from "./pages/AddProducts";
import Products from "./pages/Products";
import "./style.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/all-products" element={<Products />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
