import React from "react";

function Hero() {
    const responsiveSlider = function() {

        const slider = document.getElementById("slider");
        let sliderWidth = slider.offsetWidth;
        const slideList = document.getElementById("slideWrap");
        let count = 1;
        const items = slideList.querySelectorAll("li").length;
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
        
        window.addEventListener('resize', function() {
          sliderWidth = slider.offsetWidth;
        });
        
        const prevSlide = function() {
          if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
          else if(count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
        };
        
        const nextSlide = function() {
          if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
          else if(count = items) {
            slideList.style.left = "0px";
            count = 1;
          }
        };
        
        next.addEventListener("click", function() {
          nextSlide();
        });
        
        prev.addEventListener("click", function() {
          prevSlide();
        });
        
        setInterval(function() {
          nextSlide()
        }, 6000);
        
        };
        
        window.onload = function() {
        responsiveSlider();
        }
        
  return (
    <div className="hero" id="slider">
      <ul className="slider-wrapper" id="slideWrap">
        <li className="slide">
          <img
            src="src\assets\charity members group photo.jpg"
            alt="group photo of charity members"
          />
          <div className="text">
            <h1>Addis Hiwot Charity</h1>
            <h3>
            Empowering Communities, Changing Lives - Based at Gondar
            University
            </h3>
            <button className="hero-btn">Reach out</button>
          </div>
        </li>
        <li className="slide">
          <img
            src="src\assets\groupDiscussion.jpg"
            alt="group photo of charity members"
          />
          <div className="text">
            <h1>Addis Hiwot Charity</h1>
            <h3>
            Empowering Communities, Changing Lives - Based at Gondar <br />
            University, Ethiopia
            </h3>
            <button className="hero-btn">Reach out</button>
          </div>
        </li>
        <li className="slide">
          <img
            src="./src\assets\collabwithmena.jpg"
            alt="group photo of charity members"
          />

          <div className="text">
            <h1>Addis Hiwot Charity</h1>
            <h3>
            Empowering Communities, Changing Lives - Based at Gondar <br />
            University, Ethiopia
            </h3>
            <button className="hero-btn">Reach out</button>
          </div>
        </li>
        <li className="slide">
          <img
            src="./src\assets\nightwork.jpg"
            alt="group photo of charity members"
          />
          <div className="text">
            <h1>Addis Hiwot Charity</h1>
            <h3>
            Empowering Communities, Changing Lives - Based at Gondar <br />
            University, Ethiopia
            </h3>
            <button className="hero-btn">Reach out</button>
          </div>
        </li>
      </ul>
      <a id="prev" href="#">&#8810;</a>
      <a id="next" href="#">&#8811;</a>
    </div>
  );
}

export default Hero;
