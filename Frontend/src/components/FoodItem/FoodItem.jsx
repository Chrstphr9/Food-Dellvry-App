import { React,  useContext, useState } from 'react'
import "./FoodItem.css"
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { AuthContext } from '../../context/AuthContext'

const FoodItem = ( {id, name, price, description , image} ) => {

  const {
    cartItems,
    addToCart,
    removeFromCart
  } = useContext(StoreContext); useState

  const { currentUser } = useContext(AuthContext); 
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleAddToCart = (id) => {
    if (!currentUser) {
      // User is not logged in, show the login prompt
      setShowLoginPrompt(true);
    } else {
      // User is logged in, proceed to add to cart
      addToCart(id);
    }
  };


  return (
    
      <div className="food-item">
         <div className="food-item-img-container">
      {/* Food Item Image */}
      <img className='food-item-image' src={image} alt="" />
      
      {/* Conditional Rendering for Add/Remove Buttons */}
      {!cartItems[id] ? (
        // If the item is not in the cart, show the "Add to Cart" button
        <img 
          className="add" 
          onClick={() => handleAddToCart(id)} // Modified function here
          src={assets.add_icon_white} 
          alt='' 
        />
      ) : (
        // If the item is in the cart, show the counter with add/remove buttons
        <div className='food-item-counter'>
          {/* Remove button */}
          <img 
            onClick={() => removeFromCart(id)} 
            src={assets.remove_icon_red} 
            alt="" 
          />
          
          {/* Display the current item count */}
          <p>{cartItems[id]}</p>
          
          {/* Add button */}
          <img 
            onClick={() => addToCart(id)} 
            src={assets.add_icon_green} 
            alt="" 
          />
        </div>
      )
          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" /> 
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
  
  )
}

export default FoodItem