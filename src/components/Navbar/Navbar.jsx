import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" />
        <ul className='navbar-menu'>
            <Link onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
            <Link onClick={()=>setMenu("menu")} className={menu === "menu"? "active":""}>About</Link>
            <Link onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"? "active":""}>Mobile App</Link>
            <Link onClick={()=>setMenu("contact")} className={menu === "contact-us"? "active":""}>Contact Us</Link>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar