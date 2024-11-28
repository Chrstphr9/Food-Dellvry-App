import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  const filteredFoodList = food_list.filter(item => category === "All" || category === item.category)

  

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className='food-display-list'>
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item, index) => (
            <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          ))
        ) : (
          <p>No dishes found in this category.</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay

// import "./FoodDisplay.css"
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext)

//   const filteredFoodList = food_list.filter(item => category === "All" || category === item.category)

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top Dishes Near You</h2>
//       <div className='food-display-list'>
//         {filteredFoodList.map((item, index) => (
//           <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay




// import React, { useContext } from 'react'
// import "./FoodDisplay.css"
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({category}) => {

//     const { food_list } = useContext(StoreContext)

//   return (
//     <div className='food-dispaly' id='food-display'>
//         <h2>Top Dishes Near You</h2>
//         <div className='food-display-list'>
//             {food_list.map((item, index)=> {
//                if (category==="All" || category===item.category) {
//                 return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//                }
//             })}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay