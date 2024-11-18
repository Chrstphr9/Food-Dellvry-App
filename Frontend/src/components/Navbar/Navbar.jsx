import { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext"; // or AuthContext if you have a different context for auth
import { assets } from "../../assets/assets";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  // Assume StoreContext or AuthContext provides user info
  const { getTotalCartAmount, currentUser } = useContext(StoreContext); // or AuthContext if user is managed there

  const signOutUser = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/", { replace: true });
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/home"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
       <button onClick={()=>setShowLogin(true)}>Sign In</button>
        {/* Conditionally render the user's name or the "Sign In" button
        {currentUser ? (
          <div className="user-info">
            <Link to="/profile">{currentUser.name}</Link>
          </div>
           
        ) : (
          <div className="nav-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={signOutUser}><img src={assets.logout_icon} alt="" /><p>Logout</p></li> 
            </ul>
          </div>
          
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
