import React, { useEffect } from "react";

function Image() {
  useEffect(() => {
    // this code will execute when ever the component mount or any state value changes
    console.log("Image component has been mount!");

    // when component get destroy then this return function will run!
    return () => {
      console.log("Image component has been unMount!");
    };
  }, []);

  return (
    <div>
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
    </div>
  );
}

export default Image;
