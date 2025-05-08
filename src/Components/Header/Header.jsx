import React, { useEffect, useState } from "react";
import Button from "../Button/Button"
import "../Button/Button.css"

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  function toggleHumburger() {
    setIsActive(!isActive);
  }

  return (
    <header>
      <div className="logo"><img src="./src\assets\addishiwot_logo.png" alt="" /><p>Addis Hiwot</p></div>

      {windowWidth < 900 ? (
        <>
          {isActive && (
            <ul>
            <li><a href="#aboutUs">About us</a></li>           
             <li>Our work</li>
              <li>Get invoved</li>
              <li>Contact Us</li>
            </ul>
          )}
        </>
      ) : (
        <ul>
          <li><a href="#aboutUs">About us</a></li>
          <li>Our work</li>
          <li>Get invoved</li>
          <li>Contact Us</li>
        </ul>
      )} 

      {/* <button>Contact Us</button> */}
      <Button 
        Children="Donate" 
        backgroundColor={"var(--forth-color)"} 
        width={"136px"} 
        border="2px solid white"
        color={"white"}
        padding={"10px 10px"}
        ></Button>

      <div
        className={`humburger-menu ${isActive ? "hum-active" : ""} `}
        onClick={toggleHumburger}
      >
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
