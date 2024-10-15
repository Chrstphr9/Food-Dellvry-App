import { useState } from 'react'
// import NavbarX from './components/NavbarX/NavbarX'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './components/pages/PlaceOrder/Placeorder'
import Cart from "./components/pages/Cart/Cart"
import Footer from './components/Footer/Footer'
import LoginPopup from './components/pages/SignUp/SignUp' 
import HomeX from './components/pages/HomeX/HomeX'
import Home from './components/pages/Home/Home'
import Login from './components/pages/SignUp/SignUp'

const App = () => { 

    const [showLogin, setShowLogin] = useState(true)

  return (
    <>
    {/* {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} */}
    
    <div className='app'>
    
        <Routes> 
          
          <Route path='/' element={<Login />} /> 
          <Route path='/home' element={<Home />} /> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/order' element={<Placeorder />} />
        </Routes>
    </div>
    
    </>
  )
}

export default App