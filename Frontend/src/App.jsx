import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './components/pages/PlaceOrder/Placeorder'
import Cart from "./components/pages/Cart/Cart"
import Home from './components/pages/Home/Home'
import Signup from './components/pages/SignUp/SignUp'
import Login from './components/pages/Home/Login'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => { 

    const [showLogin, setShowLogin] = useState(true)

  return (
    <>
    {/* {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} */}
    
    <div className='app'>
    
        <Routes> 
          
          <Route path='/signup' element={<Signup/>} /> 
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>} /> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/order' element={<Placeorder />} />
        </Routes>
    </div>
    
    </>
  )
}

export default App