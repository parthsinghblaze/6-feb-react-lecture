import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { getAllProducts, deleteProduct } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const { loading, productList } = useSelector((state) => state.product);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container py-5 px-4">
      <div className="row">
        <table className="table table-secondary">
          <thead>
            <tr>
              <th>Sr no</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((item, index) => {
              const { _id, qty, price, name, category } = item;
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{category} </td>
                  <td>{price}</td>
                  <td>{qty}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteProduct(_id))}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() =>
                        navigate(`/edit-product/${name}`, { state: item })
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;

//   async function fetchProducts() {
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/product/products`
//       );
//       console.log(response);
//     } catch (e) {
//       console.log("e", e);
//     }
//   }

// fetchProducts();
