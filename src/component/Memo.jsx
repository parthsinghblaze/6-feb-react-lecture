import React, { useEffect, useRef, useState } from "react";
import { useMemo } from "react";

function Memo() {
  const [number, setNumber] = useState(0);
  const [isShowing, setIsShowing] = useState(false);

  const isPrime = useMemo(() => {
    return calPrime(number);
  }, [number]);

  function calPrime(number) {
    // for (let i = 0; i <= 1000; i++) {
    //   console.log("hii");
    // }

    if (number % 2 === 0) {
      return true;
    }

    return false;
  }

  const inputBox = useRef();

  useEffect(() => {
    console.log(inputBox.current.value);
  }, []);

  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputBox} />

      <hr />
      <h1>Use Memo</h1>
      <h2>{number}</h2>
      <h1> {isPrime ? "Yes" : "No"} </h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>

      <hr />

      {isShowing ? <h1>Hey Good Morning</h1> : null}
      <button onClick={() => setIsShowing(!isShowing)}>Toggle</button>
    </div>
  );
}

export default Memo;
