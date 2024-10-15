import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './components/pages/PlaceOrder/Placeorder'
import Cart from "./components/pages/Cart/Cart"
import Home from './components/pages/Home/Home'
import Signup from './components/pages/SignUp/SignUp'
import Login from './components/pages/Home/Login'

const App = () => { 

    const [showLogin, setShowLogin] = useState(true)

  return (
    <>
    {/* {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} */}
    
    <div className='app'>
    
        <Routes> 
          
          <Route path='/signup' element={<Signup />} /> 
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