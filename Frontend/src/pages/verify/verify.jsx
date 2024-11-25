import React, { useContext } from 'react'
import './verify.css'
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const verify = () => {

    const [searchParams, setSearchParams ] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)

    

  return (
    <div className='verify '>
        <div className="spinner">

        </div>
    </div>
  )
}

export default verify 