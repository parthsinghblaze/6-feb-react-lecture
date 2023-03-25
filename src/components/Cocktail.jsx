import React, { useContext, useState } from "react";
import { CocktailWrapper } from "../App";

function Cocktail() {
  //   const context = useContext(CocktailWrapper);
  //   const { isLoading, cocktailList } = context;

  const { isLoading, cocktailList } = useContext(CocktailWrapper);

  console.log("cocktailList", cocktailList);

  if (isLoading) {
    return <h3 className="container">Loading...</h3>;
  }

  return (
    <div className="container">
      <h4>Cocktails</h4>
      <div className="row">
        {cocktailList.map((item) => {
          console.log("item", item);

          const { strDrink, strDrinkThumb } = item;

          return (
            <div className="col-md-4 mb-5 col-6">
              <div className="card shadow">
                <img src={strDrinkThumb} />
                <div className="card-body">
                  <h5>{strDrink}</h5>
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
