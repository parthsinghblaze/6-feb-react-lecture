import React, { useState } from "react";
import { Movie, Title } from "./Movie";
import { movieList } from "./movieList";

// props => it's passes data from one component to another component

function Main() {
  const [movieData, setMovieData] = useState(movieList);

  const [selectedMovie, setSelectMovie] = useState([]);

  function addToWatchList(singleMovieName) {
    setSelectMovie([...selectedMovie, singleMovieName]);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <Title text="Top 5 Movies Name" />
          <div className="row">
            {movieData.map((item) => {
              const { id, movieName, description, link } = item;
              return (
                <Movie
                  key={id}
                  movieName={movieName}
                  description={description}
                  link={link}
                  addToWatchList={addToWatchList}
                />
              );
            })}
            {/* <Movie
          movieName="Kantara"
          description="When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice."
          link="https://en.wikipedia.org/wiki/Master_(2021_film)"
        />
        <Movie
          movieName="RRR"
          description="A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers."
          link="https://en.wikipedia.org/wiki/Master_(2021_film)"
        />
        <Movie
          movieName="Pathan"
          description="An Indian spy battles against the leader of a gang of mercenaries who have a heinous plot for his homeland."
          link="https://en.wikipedia.org/wiki/Master_(2021_film)"
        />
        <Movie
          movieName="Bhediya"
          description="Bhaskar finds himself changing after being bitten by a wolf in the forests of Arunachal. While Bhaskar begins to transform into a shape-shifting werewolf, he and his friends look for answers amid many twists, turns and laughs."
          link="https://en.wikipedia.org/wiki/Master_(2021_film)"
        />
        <Movie
          movieName="Master"
          description="An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes."
          link="https://en.wikipedia.org/wiki/Master_(2021_film)"
        /> */}
          </div>
        </div>
        <div className="col-md-4 py-5">
          <ul className="list-group">
            {selectedMovie.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
