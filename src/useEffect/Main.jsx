import React, { useState, useEffect } from "react";

function Main() {
  const [isShowing, setIsShowing] = useState(false);
  const [number, setNumber] = useState(0);

  // when ever component mount at that time the useEffect will run
  // and whenever the state change the useEffect will run again

  // if you want to run useEffect only for the first time then you can give an empty dependancy

  useEffect(() => {
    console.log("component mounted");
  }, [isShowing]);

  return (
    
    <div className="container">
      <h2>Learning useEffect</h2>
      <div className="card">
        <div className="card-body">
          <h1>{number}</h1>
          <button onClick={() => setNumber(number + 1)}>+</button>
          <button onClick={() => setNumber(number - 1)}>-</button>
        </div>
        <button onClick={() => setIsShowing(!isShowing)}>Hide/Show</button>
        {isShowing ? <h2>Hello i am showing</h2> : null}
      </div>
    </div>
  );
}

export default Main;
