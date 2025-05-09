import React from "react";
import Button from "../Button/Button";
import "../Button/Button.css";

import heroImg1 from "../../assets/charity members group photo.jpg";
import heroImg2 from "../../assets/bloodDonation.jpg";
import heroImg3 from "../../assets/collabwithmena.jpg";
import heroImg4 from "../../assets/GroupPhoto.jpg";
import heroImg5 from "../../assets/PatroitDayGroupPhoto.jpg";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Hero() {
  const responsiveSlider = function () {
    const slider = document.getElementById("slider");
    let sliderWidth = slider.offsetWidth;
    const slideList = document.getElementById("slideWrap");
    let count = 1;
    const items = slideList.querySelectorAll("li").length;
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    window.addEventListener("resize", function () {
      sliderWidth = slider.offsetWidth;
    });

    const prevSlide = function () {
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = 1)) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };

    const nextSlide = function () {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = items)) {
        slideList.style.left = "0px";
        count = 1;
      }
    };

    next.addEventListener("click", function () {
      nextSlide();
    });

    prev.addEventListener("click", function () {
      prevSlide();
    });

    setInterval(function () {
      nextSlide();
    }, 6000);
  };

  window.onload = function () {
    responsiveSlider();
  };

  return (
    <div className="hero" id="slider">
      <ul className="slider-wrapper" id="slideWrap">
        <li className="slide">
          <img src={heroImg1} alt="group photo of charity members" />
          <div className="text">
            <h1>Addis Hiwot</h1>
            <h3>
              We bring warmth and support to those seeking a second chance.
            </h3>
            <Button
              Children="Donate"
              backgroundColor={"var(--forth-color)"}
              width={"136px"}
              // border="2px solid white"
              color={"white"}
              padding={"10px 10px"}
            ></Button>
          </div>
        </li>

        <li className="slide">
          <img src={heroImg2} alt="group photo of charity members" />
          <div className="text">
            <h1>Join Our Blood Drive</h1>
            <h3>
              Save lives—be a hero in your community with the University of Gondar's support.
            </h3>
            <Button
              Children="Donate"
              backgroundColor={"var(--forth-color)"}
              width={"136px"}
              // border="2px solid white"
              color={"white"}
              padding={"10px 10px"}
            ></Button>
          </div>
        </li>

        <li className="slide">
          <img src={heroImg3} alt="group photo of charity members" />

          <div className="text">
            <h1>Partnering with MENA Charity</h1>
            <h3>
              Together, we empower communities and create change.
            </h3>
            <Button
              Children="Donate"
              backgroundColor={"var(--forth-color)"}
              width={"136px"}
              // border="2px solid white"
              color={"white"}
              padding={"10px 10px"}
            ></Button>
          </div>
        </li>

        <li className="slide">
          <img src={heroImg4} alt="group photo of charity members" />
          <div className="text">
            <h1>Football Fundraiser</h1>
            <h3>
              Uniting sports and charity to support the underserved.
            </h3>
            <Button
              Children="Donate"
              backgroundColor={"var(--forth-color)"}
              width={"136px"}
              // border="2px solid white"
              color={"white"}
              padding={"10px 10px"}
            ></Button>
          </div>
        </li>

        <li className="slide">
          <img src={heroImg5} alt="group photo of charity members" />
          <div className="text">
            <h1>Celebrating Adwa</h1>
            <h3>
              Honoring resilience and inspiring hope for a better tomorrow.
            </h3>
            <Button
              Children="Donate"
              backgroundColor={"var(--forth-color)"}
              width={"136px"}
              // border="2px solid white"
              color={"white"}
              padding={"10px 10px"}
            ></Button>
          </div>
        </li>
      </ul>
      <a id="prev" href="#">
        <FaArrowLeft />
      </a>
      <a id="next" href="#">
        <FaArrowRight />
      </a>
    </div>
  );
}

export default Hero;
