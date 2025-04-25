import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { useNavigate } from 'react-router-dom'

const Offers = () => {
  const navigate = useNavigate();
  const handleOffers = () =>{
      if(localStorage.getItem("userToken")){
          navigate("/women")
      }
      else{
          navigate("/login")
      }
  }
  return (
    <div className = 'offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button onClick={handleOffers}>Check Now !!</button>
        </div>
        <div className="offers right">
            <img src={exclusive_image} alt = ""/>

        </div>
    </div>
  )
}

export default Offers