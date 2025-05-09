import React from 'react'

function WhatWeDo({aboutus}) {
  return (
    <section className='what-we-do' id='aboutUS'>
      <h5>What we do</h5>
      <h1>
        Making A differece, <br />
        One Life at a Time.
      </h1>
      <h6>At Hope, we dedicated to uplifting conmmunities through a <br />
        range of targeted initiatives. Our focus area include
      </h6>

      <div className='two-col'>
        <ul className='col'>
            <li>
                <h3>Education Empowerment</h3>
                <p>
                    providing resources and support to ensure every child handleResize
                    access to quality education
                </p>
            </li>
            <li>
                <h3>Health and Wellness</h3>
                <p>Delivering healthcare services and promoting healthy living in underserved areas</p>
            </li>

            <li>
                <h3>Economic Development</h3>
                <p>Creating opportunities for sustanianble income and self sufficency through vocational training and micro-financing</p>
            </li>

            <li>
                <h3>Enviromental Stewardship</h3>
                <p>Protecting our planet by promoting sustainable practices and fostering enviormental awareness</p>
            </li>
        </ul>
        <div className='img-wrapper col'>
            <img src={import.meta.env.BASE_URL + "/src\assets\children group photo.jpg"} alt="children group photo" />
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
