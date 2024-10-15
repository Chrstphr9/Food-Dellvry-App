import React, { useState } from 'react'
import './Home'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
const Home = () => {

  const [ category, setCategory ] = useState("All")
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
        <Navbar setShowLogin={setShowLogin}/>
        <Header /> 
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload />
        <Footer />
    </div> 
  )
}

export default Home