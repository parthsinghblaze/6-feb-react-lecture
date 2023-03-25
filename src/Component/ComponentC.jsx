import React from "react";

function ComponentC(props) {
  const { userName } = props;

  return (
    <>
      <div>
        <h1>Welcome, {userName} </h1>
      </div>
    </>
  );
}

export default ComponentC;
