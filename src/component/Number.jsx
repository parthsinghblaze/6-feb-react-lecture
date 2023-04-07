import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/numberSlice";

function Number() {
  const { number } = useSelector((state) => state.numberSlice);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Number : {number} </h1>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default Number;
