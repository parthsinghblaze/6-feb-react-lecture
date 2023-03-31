import React from 'react'
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Cocktail from './pages/Cocktail'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import CocktailDetail from './pages/CocktailDetail'


// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/gallery",
//     element: <Gallery />
//   }
// ])

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/cocktail-drinks' element={<Cocktail />} />
        <Route path='/cocktail-drink/:cocktailId' element={<CocktailDetail />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      {/* <Header /> */}
      {/* <RouterProvider router={myRouter} /> */}
    </>

  )
}

export default App