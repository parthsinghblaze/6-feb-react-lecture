import React, { useContext } from "react";
import { WrapperContext } from "../App";

function ComponentC() {
  const myData = useContext(WrapperContext);

  console.log("my data", myData);

  const { userName } = myData;

  return (
    <>
      <div>
        <h1>Welcome, {userName}</h1>
      </div>
    </>
  );
}

export default ComponentC;
