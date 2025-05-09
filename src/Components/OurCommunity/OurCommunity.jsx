import React from "react";
import OurCommunityImg1 from "../../assets/celebration.jpg"


function OurCommunity() {
  return (
    <section className="our-community">
      <h1>
        Friends. Family. <br />
        Community.
      </h1>

      <div className="two-col">
        <ul className="text col">
          <h2>The Journey of Addis Hiwot</h2>
          <p>
            The name, Addis Hiwot is given because to remember
            Hiwot Girma that give the opportunity we came
            togetherIn 2010, Hiwot Girma was Pleasant girl of 21 and a second year nursing
            student, Hiwot Girma who had been diagnosed with aplastic
            anaemia was referred abroad for better management.
            A call for help notice was posted, and it caught the eyes of the
            PC-II student of the time(2002E.C), and they decided to take
            action and involve in the fund raising activities and Addis Hiwot established to offer opportunities for those who are in need to
            empower themselves and enable them to take charge
            in solving societal problems in return.
          </p>
        </ul>
        <div className="img-wrapper col">
          <img
            src={OurCommunityImg1}
            alt="children group photo"
          />
        </div>
      </div>
    </section>
  );
}

export default OurCommunity;
