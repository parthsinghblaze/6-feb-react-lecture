import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../component/Loader";

function CocktailDetail() {
  const [cocktailDetail, setCocktailDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const drinks = useParams();
  const { cocktailId } = drinks;
  const { state } = useLocation();

  const navigate = useNavigate();

  function fetchSingleCocktail() {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setCocktailDetail(data.drinks[0]);
        setIsLoading(false);
      });
  }

  // useNavigate, useLocation

  useEffect(() => {
    setCocktailDetail(state);
    // fetchSingleCocktail();
  }, []);

  const {
    strInstructions,
    strInstructionsES,
    strInstructionsDE,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = cocktailDetail;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container py-5">
      <button
        onClick={() => navigate("/cocktail-drinks")}
        className="btn btn-primary"
      >
        Back
      </button>
      <h1 className="mb-3">Cocktail Details </h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <img className="w-100" src={cocktailDetail.strDrinkThumb} alt="" />
        </div>
        <div className="col-md-8">
          <h1>{cocktailDetail.strDrink}</h1>
          <p>{strInstructions}</p>
          <p>{strInstructionsDE}</p>
          <p>{strInstructionsES}</p>
          <ul>
            <li>{strIngredient1}</li>
            <li>{strIngredient2}</li>
            {strIngredient3 && <li>{strIngredient3}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetail;
