import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './components/pages/PlaceOrder/Placeorder'
import Cart from "./components/pages/Cart/Cart"
import Home from "./components/pages/Home/Home"

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/order' element={<Placeorder />} />
        </Routes>
    </div>
  )
}

export default App