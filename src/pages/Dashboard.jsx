import React from "react";

function Dashboard() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card border-3">
            <div className="card-body text-center">
              <h1>78</h1>
              <h3>Total Products</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3">
            <div className="card-body text-center">
              <h1>114</h1>
              <h3>Total Users</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3">
            <div className="card-body text-center">
              <h1>46</h1>
              <h3>Orders</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
