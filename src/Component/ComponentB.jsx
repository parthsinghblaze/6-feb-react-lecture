import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  const { userName } = props;

  return <ComponentC userName={userName} />;
}

export default ComponentB;
