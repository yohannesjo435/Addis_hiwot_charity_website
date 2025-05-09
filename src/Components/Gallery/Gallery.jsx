import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button"
import "../Button/Button.css"
import { Link } from "react-router";

function Gallery() {
  return (
    <section className="gallery">
      <h1>Our Work</h1>

      <div className="image-container">
        <div className="item">
          <img src="src\assets\photoOfFamily.jpg" />
          <div className="desc">
            A loving family supported by our charity, showcasing the impact of
            community assistance
          </div>
        </div>

        <div className="item">
          <img src="src\assets\girlDonating Blood.jpg" />
          <div className="desc">
            Volunteers unite to donate blood, saving lives and supporting our
            charitable mission.
          </div>
        </div>

        <div className="item">
          <img src="src\assets\olderPeopleGetingHairCut.jpg" />
          <div className="desc">
            Providing essential grooming and cleanup services to the elderly and
            homeless, fostering dignity and care.
          </div>
        </div>

      </div> 
      
        <Link  style={{display: "flex", gap: "5px", alignItems: "center"}} to="/gallery">More <FaArrowRight style={{color: "var('--purple')"}}></FaArrowRight></Link>        


    </section>
  );
}

export default Gallery;
