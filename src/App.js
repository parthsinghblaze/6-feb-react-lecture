import React, {useState, createContext } from "react";
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Cocktail from "./pages/Cocktail";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import CocktailDetail from "./pages/CocktailDetail";
import Login from "./pages/Login";
import PrivateRoute from "./component/PrivateRoute";
import Cart from "./pages/Cart";

export const LoginWrapper = createContext();

function getLocalStorageValue() {
  let isLogin = localStorage.getItem('isLogin')

  if(isLogin) {
    return true 
  } else {
    return false
  }

}

function App() {

  const [isLogin, setIsLogin] = useState(getLocalStorageValue());
  const [cart, setCart] = useState([])
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <BrowserRouter>
        <LoginWrapper.Provider value={ { isLogin, setIsLogin, cart, setCart, showAlert, setShowAlert }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cocktail-drinks" element={<PrivateRoute><Cocktail /></PrivateRoute>} />
            <Route
              path="/cocktail-drink/:cocktailId"
              element={<PrivateRoute><CocktailDetail /></PrivateRoute>}
            />
            <Route path="/product" element={<PrivateRoute><Product /></PrivateRoute>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LoginWrapper.Provider>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <RouterProvider router={myRouter} /> */}
    </>
  );
}

export default App;
