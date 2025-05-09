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
            <h1>Our Visit to Prisoners</h1>
            <h3>
              We believe in second chances and the power of compassion. Our
              visit brought warmth, understanding, and support to those longing
              for a new beginning.
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
            <h1>Give Life, Give Blood: Join Our Blood Donation Drive</h1>
            <h3>
              Your donation saves lives—be a hero in your community by helping
              those in urgent need. Together, we can make a difference, one drop
              at a time.
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
            <h1>Stronger Together: Partnering with MENA Charity</h1>
            <h3>
              United by purpose, we join hands with MENA Charity to empower
              communities, deliver aid, and create lasting change across the
              region.
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
            <h1>Kick for a Cause: Football Fundraising Event</h1>
            <h3>
              Uniting sport and charity, our football matches raise vital funds
              to support education, healthcare, and opportunities for the
              underserved.
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
            <h1>Honoring Resilience: Celebrating Adwa</h1>
            <h3>
              Together, we commemorate the spirit of victory and freedom,
              inspiring hope and pride to build a better tomorrow for all.
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
