import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../component/Loader";

function Cocktail() {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  function fetchDrinks() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((resp) => resp.json())
      .then((data) => {
        setDrinks(data.drinks);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchDrinks();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container py-5">
      <h1 className="mb-3">Coctail drinks</h1>
      <hr />
      <div className="row">
        {drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb } = item;

          return (
            <div className="col-md-4 col-6 mb-5" key={idDrink}>
              <div className="card">
                <img src={strDrinkThumb} alt="" className="w-100" />
                <div className="card-body">
                  <h4>{strDrink}</h4>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      navigate(`/cocktail-drink/${idDrink}`, { state: item })
                    }
                  >
                    View more
                  </button>
                  {/* <Link
                    to={`/cocktail-drink/${idDrink}`}
                    className="btn btn-primary"
                  >
                    View more
                  </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cocktail;
