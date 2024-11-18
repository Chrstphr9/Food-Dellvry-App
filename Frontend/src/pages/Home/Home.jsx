import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
// import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Home = () => {

  const [ category, setCategory ] = useState("All")
  // const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
        {/* <Navbar /> */}
        {/* <Navbar setShowLogin={setShowLogin}/> */}
        <Header /> 
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload />
        <Footer />
    </div> 
  )
}

export default Home