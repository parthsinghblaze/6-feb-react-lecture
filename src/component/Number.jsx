import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/numberSlice";

function Number() {
  const { number } = useSelector((state) => state.numberSlice);
  const [numberValue, setNumberValue] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Number : {number} </h1>
      <input
        type="text"
        placeholder="Enter the number that you want"
        className="mb-4 form-control"
        value={numberValue}
        onChange={(e) => setNumberValue(e.target.value)}
      />
      <button
        className="btn btn-primary me-3"
        onClick={() => dispatch(increment(numberValue))}
      >
        +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(decrement(numberValue))}
      >
        -
      </button>
    </div>
  );
}

export default Number;
