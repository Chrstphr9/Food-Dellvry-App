import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Cart from "./pages/Cart/Cart"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import LoginPopup from './components/LoginPopup/loginPopup'
import Verify from './pages/verify/verify'
import Footer from './components/Footer/Footer'


const App = () => { 

    const [showLogin, setShowLogin] = useState(false)

  return ( 
    <>
    
    {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    
    <div className='app'>
    <Navbar setShowLogin={setShowLogin} />
        <Routes>   
          <Route path='/' element={<Home />}/> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/order' element={<Placeorder />} />
          <Route path='/verify' element={<Verify />} /> 
        </Routes>
    </div>
    <Footer />  
    </>
  )
}

export default App