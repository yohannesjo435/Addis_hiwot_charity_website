import React, { useEffect, useState } from "react";
import Button from "../Button/Button"
import "../Button/Button.css"
import { Link } from "react-router";
// import Gallery from "../Gallery/Gallery";

function Header({isInGalleryPage}) {
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
    <div className="header-wrapper">
      <header>
        <div className="logo"><img src="./src\assets\addishiwot_logo.png" alt="" /><p>Addis Hiwot</p></div>
        {windowWidth < 900 ? (
          <>
            {isActive && (
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                {!isInGalleryPage && <li><a href="#aboutUs">AboutUs</a></li>}
                <li><Link to="/gallery">Our Work</Link></li>
                <li><a href="#footer">Contact Us</a></li>
              </ul>
            )}
          </>
        ) : (
              <ul>
                <li><Link style={{color: !isInGalleryPage && "var(--purple)"}} to={"/"}>Home</Link></li>
                {!isInGalleryPage && <li><a href="#aboutUs">AboutUs</a></li>}
                <li><Link style={{color: isInGalleryPage && "var(--purple)"}} to="/gallery">Our Work</Link></li>
                <li><a href="#footer">Contact Us</a></li>
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
    </div>
  );
}

export default Header;
