import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";    
import { FaFacebook } from "react-icons/fa";

function TopBar() {
  return (
    <div className='top-bar-wrapper'>
      <div className="social-icons">
        <FaTelegram />
        <FaFacebook></FaFacebook>
      </div>

      <div className="phone-number-wrapper">
        <p>10003456789</p>
        <FaPhoneAlt />
        <p>+12345678</p>
      </div>
    </div>
  )
}

export default TopBar
