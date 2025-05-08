import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function FooterLinks() {
  return (
    <div className="footer-link-wrapper">
      <ul>
        <h4>Quick links</h4>
        <li>Home</li>
        <li>About us</li>
        <li>Service</li>
        <li>Contact Us</li>
      </ul>

      <ul>
        <h4>Contact Us</h4>
        <li>+0901010101</li>
        <li>+0902020304</li>
        <li>www.addisHiwot.com</li>
      </ul>

      <ul className="social-links">
        <li>
          <FaTelegram />
        </li>
        <li>
          <FaFacebook></FaFacebook>
        </li>
        <li>
          <FaTelegram />
        </li>
      </ul>
    </div>
  );
}
