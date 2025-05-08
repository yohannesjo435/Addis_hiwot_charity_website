import React from 'react'

function Gallery() {
  return (
    <section className='gallery'>
      <h3>Our Work</h3>

      <div className="image-container">
        <div className="item">
            <img src="src\assets\photoOfFamily.jpg"   />
            <div className="desc">Info about text</div>
        </div>

        <div className="item">
            <img src="src\assets\photoOfFamily.jpg"   />
            <div className="desc">Info about text</div>
        </div>

        <div className="item">
            <img src="src\assets\photoOfFamily.jpg"   />
            <div className="desc">Info about text</div>
        </div>

        
      </div>
    </section>
  )
}

export default Gallery
