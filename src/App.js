import { createContext, useEffect, useState } from "react";
import Cocktail from "./components/Cocktail";
import Header from "./components/Header";

export const CocktailWrapper = createContext();

function App() {
  const [cocktailList, setCoctailList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drinkName, setDrinkName] = useState(``)

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCoctailList(data.drinks)
        setIsLoading(false)
      })
      .catch((e) => console.log("e", e));
  }, [drinkName]);

  return (
    <>
      <CocktailWrapper.Provider value={{ cocktailList, isLoading, drinkName, setDrinkName }}>
        <Header />
        <Cocktail />
      </CocktailWrapper.Provider>
    </>
  );
}

export default App;
