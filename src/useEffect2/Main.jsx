import React, { useState } from "react";
import Image from "./Image";

function Main() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="container py-5">
      <button
        className="btn btn-primary mb-5"
        onClick={() => setIsShowing(!isShowing)}
      >
        Hide/Show
      </button>
      {isShowing ? <Image /> : null}
    </div>
  );
}

export default Main;
