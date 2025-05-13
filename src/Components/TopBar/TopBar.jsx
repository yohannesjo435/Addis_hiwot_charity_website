import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";    
import { FaFacebook } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import UogLogo from "../../assets/uog_logo.png"


function TopBar() {
  return (
    <div className='top-bar-wrapper'>

        <div className='top-logo'>
          <img className="uogLogo" src={UogLogo}/>
          <p>University of Gondar</p>
        </div>

      <div className="phone-number-wrapper">
        <BsBank className='bank-icon'></BsBank>
        <p>1000095074147</p>
        <FaPhoneAlt className='phone-icon' />
        <p>+251965881552</p>
        <div className="social-icons">
          <FaTelegram />
          <FaFacebook></FaFacebook>
        </div>
      </div>
    </div>
  )
}

export default TopBar
