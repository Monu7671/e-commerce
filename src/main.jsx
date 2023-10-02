import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Categories from './pages/Categories.jsx'
import ProductsDetail from './pages/ProductsDetail'
import { CartContextProvider } from './CartContext.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='categories' element={<Categories />} />
            <Route path='products' />
            <Route path='products/:id' element={< ProductsDetail />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
)
