import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import Button from "../Button/Button"
// import "../Button/Button.css"
import { Link } from "react-router";

import cardImg1 from "../../assets/cardImg/grooming.jpg"
import cardImg2 from "../../assets/cardImg/childImg.jpg"
import cardImg3 from "../../assets/olderPeopleGetingHairCut.jpg"
// import cardImg4 from "../../assets/girlDonating Blood.jpg"
// import cardImg5 from "../../assets/cardImg/infant.jpg"


function Card() {
  return (
    <section className="card">
      <h1>Our Work</h1>

      <div className="card-image-container">
        <div className="cardItem">
          <img src={cardImg1} />
          <div className="cardDesc">
            <h2>Caring Hands for Our Elders</h2>
            <p>
              Thank you for your compassionate care for our elders. Your support makes a difference!
            </p>
          </div>
        </div>

        <div className="cardItem">
          <img src={cardImg2} />
          <div className="cardDesc">
            <h2>Supporting Our Children</h2>
            <p>
            Thank you for uplifting our children. Your dedication helps shape their futures!
            </p>
          </div>
        </div>

        <div className="cardItem">
          <img src={cardImg3} />
          <div className="cardDesc">
            <h2>Provideing support</h2>
            <p>
            Providing essential grooming and cleanup services to the elderly and homeless, fostering dignity and care.
            </p>
          </div>
        </div>

      </div> 
      
        <Link  style={{display: "flex", gap: "5px", alignItems: "center"}} to="/gallery">More <FaArrowRight style={{color: "var('--purple')"}}></FaArrowRight></Link>        


    </section>
  );
}

export default Card;
