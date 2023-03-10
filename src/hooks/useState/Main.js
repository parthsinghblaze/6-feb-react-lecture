import { useState } from "react";

function Main() {
  // hooks => use

  // const [variable, function] = useState()

  // 1 => it's a simple variable to store the initial value
  // 2 => it's a function which will change the value of the initial value os the variable

  // string
  const [userName, setUserName] = useState("kalpesh");
  const [friendName, setFriendName] = useState("Tanmay");

  // number
  const [number, setNumber] = useState(0);
  const [square, setSquare] = useState(2);

  // boolean
  const [isShowing, setIsShowing] = useState(false);

  // object
    const [personData, setPersonData] = useState({
        firstName: 'rahul',
        birthYear: 2000,
        sports: 'Volleyball'
    })

    console.log('personData', personData)

  // 1st time
  // number = 0
  // number + 1 => 0 + 1 => 1

  // 2nd time
  // number = 1
  // number + 1 => 1 + 1 => 2

  // 3rd time
  // number = 2
  // number + 1 => 2 + 1 => 3

  // 4th time
  // number = 3
  // number + 1 => 3 + 1 => 4

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    setNumber(number - 1);
  }

  function showImage() {
    setIsShowing(true);
  }

  function changeName() {
    setPersonData({
        ...personData,
        firstName: 'harshil'
    })
  }

  return (
    <div className="container">
      <h1 className="text-center py-5">Use State</h1>

      <div className="card mb-5">
        <div className="card-header">
          <h2>Object Example</h2>
        </div>
        <div className="card-body">
          <h4>My name is: {personData.firstName} </h4>
          <h4>My birth year is: {personData.birthYear} </h4>
          <h4>I loved to play: {personData.sports} </h4>
        </div>
        <div className="card-footer">
        <button className="btn btn-primary mb-3" onClick={changeName}>Change Name</button>

        </div>
      </div>

      <div className="card mb-5">
        <div className="card-header">
          <h2>Boolean Example</h2>
        </div>
        <div className="card-body">
          <button className="btn btn-primary mb-3" onClick={showImage}>
            Show Image
          </button>

          {/* <button className='btn btn-primary mb-3' onClick={() => setIsShowing(true)}>Show Image</button> */}

          <button
            className="btn btn-warning mb-3 ms-3"
            onClick={() => setIsShowing(false)}
          >
            hide Image
          </button>

          <button
            className="btn btn-dark mb-3 ms-3"
            onClick={() => setIsShowing(!isShowing)}
          >
            Hide/Show
          </button>

          {/* 
                    
                        1st time => isShowing = false => true 
                        2nd time => isShowing = true => false
                    
                     */}

          <br />

          {isShowing ? (
            <img
              src="https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg?w=2000"
              className="w-25"
            />
          ) : null}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>String Example</h2>
        </div>
        <div className="card-body">
          <h2>My name is : {userName} </h2>
        </div>
        <div className="card-footer">
          <button
            onClick={() => setUserName("Jenny")}
            className="btn btn-primary"
          >
            Change the Name
          </button>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-header">
          <h2>String Example</h2>
        </div>
        <div className="card-body">
          <h2>My Best friend is : {friendName} </h2>
        </div>
        <div className="card-footer">
          <button
            onClick={() => setFriendName("Shalini")}
            className="btn btn-primary"
          >
            Change the Best friend name
          </button>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-header">
          <h2>Number Example</h2>
        </div>
        <div className="card-body">
          <h2> Number : {number} </h2>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={() => increment()}>
            +
          </button>
          <button className="btn btn-danger" onClick={() => decrement()}>
            -
          </button>
        </div>
      </div>

      <div className="card mt-5" style={{ marginBottom: "300px" }}>
        <div className="card-header">
          <h2>Number Example</h2>
        </div>
        <div className="card-body">
          <h2> Square of : {square} </h2>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            onClick={() => setSquare(square * 2)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
