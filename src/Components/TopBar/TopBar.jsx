import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";    
import { FaFacebook } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

function TopBar() {
  return (
    <div className='top-bar-wrapper'>
      <div className="social-icons">
        <FaTelegram />
        <FaFacebook></FaFacebook>
      </div>

      <div className="phone-number-wrapper">
        <BsBank></BsBank>
        <p>1000095074147</p>
        <FaPhoneAlt />
        <p>+251 915861262</p>
      </div>
    </div>
  )
}

export default TopBar
