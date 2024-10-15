import React, { useState } from 'react'
import './HomeX'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'
import Navbar from '../../NavbarX/NavbarX'
const Home = () => {

  const [ category, setCategory ] = useState("All")
  return (
    <div>
        
        <Header /> 
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload />
    </div> 
  )
}

export default Home