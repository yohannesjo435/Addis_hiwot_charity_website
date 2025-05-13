import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "../Button/Button.css";
import heroImg1 from "../../assets/charity members group photo.jpg";
import heroImg2 from "../../assets/bloodDonation.jpg";
import heroImg3 from "../../assets/collabwithmena.jpg";
import heroImg4 from "../../assets/GroupPhoto.jpg";
import heroImg5 from "../../assets/PatroitDayGroupPhoto.jpg";

function SliderNew() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
    // const interval = setInterval(() => {
    //   plusSlides(1);
    // }, 3000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Corrected here
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; // Corrected here
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1/3</div>
        <img src={heroImg1} alt="Caption one" />
        <div className="content">
          <h1>Addis Hiwot</h1>
          <h3>We bring warmth and support to those seeking a second chance.</h3>
          <Button
            Children="Donate"
            backgroundColor={"var(--forth-color)"}
            width={"136px"}
            // border="2px solid white"
            color={"white"}
            padding={"10px 10px"}
            href={"#footer"}
            ></Button>
        </div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2/3</div>
        <img src={heroImg2} alt="Caption two" />
        <div className="content">
          <h1>Addis Hiwot</h1>
          <h3>We bring warmth and support to those seeking a second chance.</h3>
          <Button
            Children="Donate"
            backgroundColor={"var(--forth-color)"}
            width={"136px"}
            // border="2px solid white"
            color={"white"}
            padding={"10px 10px"}
            href={"#footer"}
            ></Button>
        </div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3/3</div>
        <img src={heroImg3} alt="Caption three" />
        <div className="content">
          <h1>Addis Hiwot</h1>
          <h3>We bring warmth and support to those seeking a second chance.</h3>
          <Button
            Children="Donate"
            backgroundColor={"var(--forth-color)"}
            width={"136px"}
            // border="2px solid white"
            color={"white"}
            padding={"10px 10px"}
            href={"#footer"}
            ></Button>
        </div>
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>
        {" "}
        ❮{" "}
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        {" "}
        ❯{" "}
      </a>

      <div className="dots">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}

export default SliderNew;
