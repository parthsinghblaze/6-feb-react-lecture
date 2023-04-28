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
import Private from "./commonComponent/Private";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
            <Route path="/" element={<Private><Dashboard /></Private> } />
            <Route path="/dashboard" element={ <Private> <Dashboard /></Private>} />
            <Route path="/add-products" element={<Private><AddProducts /></Private>} />
            <Route path="/all-products" element={<Private><Products /></Private>} />
            <Route path="/edit-product/:name" element={<Private><AddProducts /></Private>} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
