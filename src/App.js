import { Alert } from 'react-bootstrap'
import React from 'react'
import Layout from './commonComponent/Layout'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddProducts from './pages/AddProducts'
import './style.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-products' element={<AddProducts />} />
        <Route path='/all-products' element={<h1>All Products</h1>} />
      </Routes>
    </Layout>

  )
}

export default App