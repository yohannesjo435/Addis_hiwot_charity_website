import React from "react";

import heroImg1 from "../../assets/charity members group photo.jpg";
import heroImg2 from "../../assets/bloodDonation.jpg";
import heroImg3 from "../../assets/collabwithmena.jpg";
import heroImg4 from "../../assets/GroupPhoto.jpg";
import heroImg5 from "../../assets/PatroitDayGroupPhoto.jpg";

import Button from "../Button/Button";
import "../Button/Button.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Slider() {
  return (
    <div className="fancy-slider">
      <div className="carousel prev">
        <div className="list">
          <div className="item">
            <img src={heroImg1} />
            <div className="content">
              <h1 className="title">Addis Hiwot</h1>
              <h3 className="topic">
                We bring warmth and support to those seeking a second chance.
              </h3>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>

          <div className="item">
            <img src={heroImg1} />
            <div className="content">
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
          </div>

          <div className="item">
            <img src={heroImg2} />
            <div className="content">
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
          </div>

          <div className="item">
            <img src={heroImg3} />
            <div className="content">
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
          </div>
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src={heroImg2} />
            <div className="content">
              <div className="title">Name Slider</div>

              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={heroImg3} />
            <div className="content">
              <div className="title">Name Slider</div>

              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={heroImg4} />
            <div className="content">
              <div className="title">Name Slider</div>

              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={heroImg5} />
            <div className="content">
              <div className="title">Name Slider</div>

              <div className="des">Description</div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="prev">
            
            <FaArrowLeft />
          </button>
          <button id="next">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
