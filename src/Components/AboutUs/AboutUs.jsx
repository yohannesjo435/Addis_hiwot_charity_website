import React, { useEffect, useState } from "react";
import aniImg from "../../assets/addisHiwotAni2.jpg";
import Header from "../Header/Header";
import "../Header/Header.css";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";
import { useLocation } from "react-router";

const AboutUs = () => {
    const [isInAboutUs, setIsInAboutUs] = useState(false)
    const location = useLocation().pathname
    
    function handlePath() {
        if (location === "/aboutus") {
            setIsInAboutUs(true)
        }
    }
    useEffect (()=> {
        handlePath()
    }, [location])
  return (
    <>
      <Header isInAboutUs={isInAboutUs}></Header>
      <section className="aboutUs-section">
        <div className="row">
          <div className="aboutUs-left">
            <img src={aniImg} />
            <h2>About Us</h2>
            <h3>Welcome to Addis Hiwot Charity Organization</h3>
            <p>
              Founded in 2006 E.C, Addis Hiwot Charity Organization is a
              dedicated, non-political, non-religious, and non-profit charitable
              organization committed to societal development. Our mission is to
              empower individuals in need, enabling them to take charge of their
              lives and contribute positively to their communities.
            </p>
            <br />

            <h3>Our Journey</h3>
            <p>
              The inception of Addis Hiwot was inspired by the story of Hiwot
              Girma, a courageous nursing student diagnosed with aplastic
              anemia. In 2010, a heartfelt call for help mobilized the students
              of Gondar University, leading to a remarkable fundraising campaign
              that raised over 130,000 ETB. This initiative not only provided
              Hiwot with the medical treatment she needed in Thailand but also
              ignited a spirit of compassion and community service among
              students and faculty alike.
            </p>
            <br />
            <h3>What We Do</h3>
            <p>
              At Addis Hiwot, we believe in a multi-disciplinary approach to
              charity. Our activities encompass: Healthcare Initiatives: We
              facilitate medical treatments for individuals in need, ensuring
              access to quality healthcare services. Educational Support: We
              provide financial aid, academic assistance, and psychosocial
              support to students, helping them achieve their dreams. Community
              Engagement: Through blood donation campaigns, clothing drives, and
              public holiday celebrations, we actively engage with the community
              to promote health, education, and environmental awareness. Youth
              Development: Our youth center, designed by architecture students,
              is a testament to our commitment to empowering the next generation
              through vision-building training and mentorship.
            </p>
            <br />
            <h3>Our Vison</h3>
            <p>
              We envision a society where every individual has the opportunity
              to thrive, regardless of their circumstances. Our goal is to
              establish the Addis Hiwot Village and the largest referral
              hospital in the country, providing free medical services to those
              in need.
            </p>
            <br />
            <h3>join Us</h3>
            <p>
              As we continue our journey, we invite you to join us in making a
              difference. Whether through volunteering, donations, or spreading
              awareness, your support can help us uplift lives and create a
              brighter future for our communities.
            </p>
          </div>
          <div className="aboutUs-right">
            <h3>Impact Areas</h3>
            <div>
              <span>Healthcare Support</span>
              <span>48+</span>
            </div>
            <div>
              <span>Educational Aid</span>
              <span>62+</span>
            </div>
            <div>
              <span>Community Outreach</span>
              <span>37+</span>
            </div>
            <div>
              <span>Youth Empowerment</span>
              <span>29+</span>
            </div>
            <div>
              <span>Blood Donation Drives</span>
              <span>825+</span>
            </div>
            <div>
              <span>Environmental Protection</span>
              <span>23+</span>
            </div>
          </div>
        </div>

    </section>
    <Footer></Footer>
    </>
  );
};

export default AboutUs;
