import { useState } from 'react'
import './App.css'
import TopBar from './Components/TopBar/TopBar'
import "./Components/TopBar/TopBar.css"
import Header from './Components/Header/Header'
import "./Components/Header/Header.css"
import Hero from './Components/Hero/Hero'
import "./Components/Hero/Hero.css"
import WhatWeDo from './Components/WhatWeDo/WhatWeDo'
import "./Components/WhatWeDo/WhatWeDo.css"
import OurCommunity from './Components/OurCommunity/OurCommunity'
import "./Components/OurCommunity/OurCommunity.css"
import Footer from './Components/Footer/Footer'
import "./Components/Footer/Footer.css"
import Card from './Components/Card/Card'
import './Components/Card/Card.css'
import Slider from './Components/Slider/Slider'
import './Components/Slider/Slider.css'
import Number from './Components/Numbers/Number'
import './Components/Numbers/Number.css'
import SliderNew from './Components/SliderNew/SliderNew'
import './Components/SliderNew/SliderNew.css'

function App() {
  // console.log(import.meta.env.BASE_URL)
  return (
    <>
      <main>
        <TopBar></TopBar>
        <Header isInGalleryPage={false}></Header>
        {/* <Slider></Slider> */}
        {/* <Hero></Hero> */}
        <SliderNew></SliderNew>
        <Number></Number>
        <Card></Card>
        <WhatWeDo></WhatWeDo>
        <section id='aboutUs'>
          <OurCommunity></OurCommunity>
        </section>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
