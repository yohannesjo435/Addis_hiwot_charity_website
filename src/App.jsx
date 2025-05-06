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

function App() {
  
  return (
    <>
      <main>
        <TopBar></TopBar>
        <Header></Header>
        <Hero></Hero>
        <WhatWeDo></WhatWeDo>
        <OurCommunity></OurCommunity>
      </main>
    </>
  )
}

export default App
