import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Cart from "./pages/Cart/Cart"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import LoginPopup from './components/LoginPopup/loginPopup'
// import Signup from './components/pages/SignUp/SignUp'
// import Login from './components/pages/Home/Login'
// import ProtectedRoute from './components/ProtectedRoute'

const App = () => { 

    const [showLogin, setShowLogin] = useState(false)

  return ( 
    <>
    
    {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    
    <div className='app'>
    <Navbar setShowLogin={setShowLogin} />
        <Routes> 
          {/* {showLogin} */}
          {/* <Route path='/signup' element={<Signup/>} /> 
          <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Home />}/> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/order' element={<Placeorder />} />
        </Routes>
    </div>
    
    </>
  )
}

export default App