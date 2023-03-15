import React from "react";

export function Movie(props) {
  const { movieName, description, link, addToWatchList } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body">
          <h3>Movie Name: {movieName}</h3>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <a target="_new" href={link} className="btn btn-primary">
            More Details
          </a>
          <button
            className="btn btn-warning ms-4"
            onClick={() => addToWatchList(movieName)}
          >
            Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export function Title(props) {
  const { text } = props;

  return <h1>{text}</h1>;
}
