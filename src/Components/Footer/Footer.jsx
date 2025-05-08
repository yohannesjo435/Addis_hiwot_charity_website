import React from 'react'
import Feedback from '../Feedback/Feedback'
import '../Feedback/Feedback.css'
import FooterLinks from '../FooterLinks/FooterLinks'
import '../FooterLinks/FooterLinks.css'


function Footer() {
  return (
    <footer id="footer">
      <Feedback></Feedback>
      <FooterLinks></FooterLinks>
      {/* <h1>Addis Hiwot</h1> */}
      <FooterLogo></FooterLogo>
    </footer>
  )
}

function FooterLogo() {
  return (
    <div className='footer-img-wrapper'>
      <img src="src\assets\addishiwot_logo.png"/>
    </div>
  )
}
export default (Footer);
