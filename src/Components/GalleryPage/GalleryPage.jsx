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

function GalleryPage() {
  return (
    <>
      <TopBar></TopBar>
      <Header isInGalleryPage={true}></Header>
      <section className="GalleryPage">
        <h1>Our Gallery</h1>

        <div className="image-container">
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
            <img src={photo4}/>
            <div className="desc">
              A loving family supported by our charity, showcasing the impact of
              community assistance
            </div>
          </div>

          <div className="item">
            <img src={photo5} />
            <div className="desc">
              Volunteers unite to donate blood, saving lives and supporting our
              charitable mission.
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
              Providing essential grooming and cleanup services to the elderly and
              homeless, fostering dignity and care.
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
              Providing essential grooming and cleanup services to the elderly and
              homeless, fostering dignity and care.
            </div>
          </div>




        </div>

      </section>
      <Footer></Footer>
    </>
  );
}

export default GalleryPage;
