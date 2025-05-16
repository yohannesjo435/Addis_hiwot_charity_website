import React from "react";
import Button from "../Button/Button"
import "../Button/Button.css"
import Header from "../Header/Header";
import "../Header/Header.css"
import Footer from "../Footer/Footer";
import "../Footer/Footer.css"
import TopBar from '../TopBar/TopBar'
import "../TopBar/TopBar.css"

import photo1 from "../../assets/photoOfFamily.jpg"
import photo2 from "../../assets/girlDonating Blood.jpg"
import photo3 from "../../assets/olderPeopleGetingHairCut.jpg"
import photo4 from "../../assets/helpingTheElderling.jpg"
import photo5 from "../../assets/peopleWashingClothe.jpg"
import photo6 from "../../assets/helpingElderly.jpg"
import photo7 from "../../assets/clotheDonation.jpg"
import photo8 from "../../assets/WomenGetinBraid.jpg"
import photo9 from "../../assets/childrenGetingTHeirHairDone.jpg"
import photo10 from "../../assets/cardImg/childrenInSchool.jpg"
import photo11 from "../../assets/cardImg/lunch.jpg"
import photo12 from "../../assets/cardImg/helping.jpg"

function GalleryPage() {
  return (
    <>
      <TopBar></TopBar>
      <Header isInGalleryPage={true}></Header>
      <section className="GalleryPage">
        <h1>Our Gallery</h1>

        <div className="image-container">
          <div className="item">
              <img src={photo4}/>
              <div className="desc">
                Providing Health care support those  in need
              </div>
            </div>
          <div className="item">
              <img src={photo10}/>
              <div className="desc">
                supporting and providing essentail learning tools for children in School
              </div>
            </div>

          <div className="item">
            <img src={photo1} />
            <div className="desc">
              A loving family supported by our charity, showcasing the impact of
              community assistance
            </div>
          </div>

          <div className="item">
            <img src={photo2} />
            <div className="desc">
              Volunteers unite to donate blood, saving lives and supporting our
              charitable mission.
            </div>
          </div>

          <div className="item">
            <img src={photo3} />
            <div className="desc">
              Providing essential grooming and cleanup services to the elderly and
              homeless, fostering dignity and care.
            </div>
          </div>

          <div className="item">
            <img src={photo5} />
            <div className="desc">
            Providing essential grooming and cleanup services to the mothers and their children.
            </div>
          </div>

          <div className="item">
            <img src={photo6} />
            <div className="desc">
              Providing essential grooming and cleanup services to the elderly and
              homeless, fostering dignity and care.
            </div>
          </div>

          <div className="item">
            <img src={photo7} />
            <div className="desc">
              Giving clothe for those in need in our Community
            </div>
          </div>

          <div className="item">
            <img src={photo8} />
            <div className="desc">
              Providing essential grooming and cleanup services to the elderly and
              homeless, fostering dignity and care.
            </div>
          </div>

          <div className="item">
            <img src={photo9} />
            <div className="desc">
              Children joyfully getting their hair braided and cut, surrounded by caring volunteers.
            </div>
          </div>

          <div className="item">
            <img src={photo11} />
            <div className="desc">
              Providing meals for those in need, bringing joy during the holidays.
            </div>
          </div>
          <div className="item">
            <img src={photo12} />
            <div className="desc">
              Essential health support offered to those in need, ensuring their well-being and care.
            </div>
          </div>

        </div>

      </section>
      <Footer></Footer>
    </>
  );
}

export default GalleryPage;
