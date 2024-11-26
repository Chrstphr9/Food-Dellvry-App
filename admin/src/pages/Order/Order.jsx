import React from 'react'
import './Order.css'
import { useState } from 'react'
import { toast } from "react-toastify"
import { useEffect } from 'react'
import axios from 'axios'
const Order = ({url}) => {

  const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
      const response = await axios.get(url+"/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data)
          
      } else {
        toast.error("Error")
      }
    }

    useEffect(() => {
      fetchAllOrders();
    }, [])
    
  


  return (
    <div>Order</div>
  )
}

export default Order