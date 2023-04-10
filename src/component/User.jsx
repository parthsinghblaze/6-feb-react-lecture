import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFirstName } from "../redux/userSlice";

function User() {
  const dispatch = useDispatch();

  const { firstName, lastName } = useSelector((state) => state.userSlice);
  return (
    <div className="container">
      <h1>User Info</h1>
      <h3>
        {firstName} {lastName}
      </h3>
      <button
        onClick={() =>
          dispatch(changeFirstName({ firstName: "parth", lastName: "singh" }))
        }
      >
        Change
      </button>
    </div>
  );
}

export default User;
