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
        <li>+Phone: +251 915861262</li>
        <li>Phone: +251 912320922</li>
        <li>Phone: 251 910115782</li>
        <li>Phone: +251 913857376</li>
        <li>CBE: 1000095074147</li>
        <li>2002addishiwot@gmail.com</li>
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
