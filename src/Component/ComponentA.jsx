import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(props) {
  const { userName } = props;

  return (
    <div>
      <ComponentB userName={userName} />
    </div>
  );
}

export default ComponentA;
