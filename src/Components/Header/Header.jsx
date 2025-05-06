import React, { useEffect, useState } from "react";

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
      <div className="logo">Addis Hiwot</div>

      {windowWidth < 900 ? (
        <>
          {isActive && (
            <ul>
              <li>About us</li>
              <li>Our work</li>
              <li>Get invoved</li>
              <li>Contact Us</li>
            </ul>
          )}
        </>
      ) : (
        <ul>
          <li>About us</li>
          <li>Our work</li>
          <li>Get invoved</li>
          <li>Contact Us</li>
        </ul>
      )}

      <button>Contact Us</button>

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
