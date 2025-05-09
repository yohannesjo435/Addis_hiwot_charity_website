import React from "react";
import Button from "../Button/Button"
import "../Button/Button.css"
import Header from "../Header/Header";
import "../Header/Header.css"
import Footer from "../Footer/Footer";
import "../Footer/Footer.css"
import TopBar from '../TopBar/TopBar'
import "../TopBar/TopBar.css"

function GalleryPage() {
  return (
    <>
      <TopBar></TopBar>
      <Header isInGalleryPage={true}></Header>
      <section className="GalleryPage">
        <h1>Our Gallery</h1>

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

      </section>
      <Footer></Footer>
    </>
  );
}

export default GalleryPage;
