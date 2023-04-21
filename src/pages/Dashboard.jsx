import React from "react";

function Dashboard() {
  return (
    <div className="container py-5">
      {/* <div>
        <button data-bs-toggle="collapse" data-bs-target="#para1">
          Collapse
        </button>
        <button data-bs-toggle="collapse" data-bs-target="#para2">
          Collapse 2
        </button>
        <p className="collapse" id="para1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          temporibus provident perspiciatis voluptate laborum totam soluta
          cupiditate sed id veniam tenetur eveniet vero in mollitia a excepturi,
          maiores at? Exercitationem.
        </p>
        <p className="collapse" id="para2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          temporibus provident perspiciatis voluptate laborum totam soluta
          cupiditate sed id veniam tenetur eveniet vero in mollitia a excepturi,
          maiores at? Exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Soluta, distinctio ipsam adipisci beatae qui libero
          vitae pariatur odio blanditiis ab, nam, consectetur aliquid provident.
          Nostrum odio itaque corrupti exercitationem quod!
        </p>
      </div> */}
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
