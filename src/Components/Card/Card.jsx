import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button"
import "../Button/Button.css"
import { Link } from "react-router";

import cardImg1 from "../../assets/photoOfFamily.jpg"
import cardImg2 from "../../assets/helpingTheElderling.jpg"
import cardImg3 from "../../assets/olderPeopleGetingHairCut.jpg"
import cardImg4 from "../../assets/girlDonating Blood.jpg"


function Card() {
  return (
    <section className="card">
      <h1>Our Work</h1>

      <div className="card-image-container">
        <div className="cardItem">
          <img src={cardImg1} />
          <div className="cardDesc">
            A loving family supported by our charity, showcasing the impact of
            community assistance
          </div>
        </div>

        <div className="cardItem">
          <img src={cardImg4} />
          <div className="cardDesc">
            Volunteers unite to donate blood, saving lives and supporting our
            charitable mission.
          </div>
        </div>

        <div className="cardItem">
          <img src={cardImg3} />
          <div className="cardDesc">
            Providing essential grooming and cleanup services to the elderly and
            homeless, fostering dignity and care.
          </div>
        </div>

      </div> 
      
        <Link  style={{display: "flex", gap: "5px", alignItems: "center"}} to="/gallery">More <FaArrowRight style={{color: "var('--purple')"}}></FaArrowRight></Link>        


    </section>
  );
}

export default Card;
