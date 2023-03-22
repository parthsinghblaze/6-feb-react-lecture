import React, { useState } from "react";

function Main() {
  // 1 => create a state
  // 2 => add value attribute to the input
  // 3 => add onChange event in that input with e.target.value

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  // adding an table array state
  const [tableData, setTableData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // storing the value in the object
    const formData = {
      first_name: firstName,
      last_name: lastName,
      city: city,
    };

    // adding all the data of the form in an array
    setTableData([...tableData, formData]);

    // clearing the input value
    setFirstName("");
    setLastName("");
    setCity("");
  }

  console.log("table data", tableData);

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 bg-dark text-white offset-md-3 p-5 shadow">
            <form>
              <div className="mb-3">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <table className="table table-primary table-hover">
              <thead className="">
                <tr>
                  <th>Sr no</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => {
                  const { first_name, last_name, city } = item;
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <th>{first_name}</th>
                      <th>{last_name}</th>
                      <th>{city}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
