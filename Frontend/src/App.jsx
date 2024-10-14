import { useState } from 'react'
// import NavbarX from './components/NavbarX/NavbarX'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './components/pages/PlaceOrder/Placeorder'
import Cart from "./components/pages/Cart/Cart"
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup' 
import HomeX from './components/pages/HomeX/HomeX'
import Home from './components/pages/Home/Home'

const App = () => {

    const [showLogin, setShowLogin] = useState(true)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes> 
          <Route path='/homex' element={<HomeX />} /> 
          <Route path='/' element={<Home />} /> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/order' element={<Placeorder />} />
        </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App