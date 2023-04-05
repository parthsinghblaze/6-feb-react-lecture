import React, { useContext } from "react";
import { LoginWrapper } from "../App";

function Cart() {
  const { isCart, cart } = useContext(LoginWrapper);

  return (
    <div className="container py-5">
      <h1 className="mb-3">You Bag</h1>

      {cart.length === 0 && <h3>Your Bag is Empty</h3>}

      {cart.map((item) => {
        const { image, name } = item;
        return (
          <div className="d-flex gap-5 align-items-center mb-4">
            <img src={image} width="50px" /> <h3>{name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
