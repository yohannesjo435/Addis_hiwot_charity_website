import { useState } from 'react'
import './App.css'
import TopBar from './Components/TopBar/Topbar'
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
import Gallery from './Components/Gallery/Gallery'
import './Components/Gallery/Gallery.css'


function App() {
  
  return (
    <>
      <main>
        <TopBar></TopBar>
        <Header isInGalleryPage={false}></Header>
        <Hero></Hero>
        <Gallery></Gallery>
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
