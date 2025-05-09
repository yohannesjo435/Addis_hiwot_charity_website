import React from "react";

function OurCommunity() {
  return (
    <section className="our-community">
      <h1>
        Friends. Family. <br />
        Community.
      </h1>

      <div className="two-col">
        <ul className="text col">
          <h2>The Journey of Hope</h2>
          <p>
            Hope was born out of a deep-seated belief that every life holds
            immense value and potential. Founded in [Year], our organization
            began with a small group of passionate individuals determined to
            make a difference. From humble beginnings, we have grown into a
            network of dedicated volunteers, supporters, and partners, all
            united by a common goal: to bring hope to those who need it most.
            Our journey has been marked by countless stories of transformation
            and triumph. From a child who received a scholarship and became the
            first in their family to attend college, to communities that have
            blossomed through our sustainable farming programs – these successes
            fuel our commitment to continue our work with unwavering dedication.
            We invite you to be a part of our story. Together, we can turn the
            tide and create a world where hope is a reality for everyone.
          </p>
        </ul>
        <div className="img-wrapper col">
          <img
            src={import.meta.env.BASE_URL + "src\assets\celebration.jpg"}
            alt="children group photo"
          />
        </div>
      </div>
    </section>
  );
}

export default OurCommunity;
