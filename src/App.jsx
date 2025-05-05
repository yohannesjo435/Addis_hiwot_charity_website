import { useState } from 'react'
import './App.css'
import TopBar from './Components/TopBar/Topbar'
import "./Components/TopBar/TopBar.css"
import Header from './Components/Header/Header'
import "./Components/Header/Header.css"
import Hero from './Components/Hero/Hero'
import "./Components/Hero/Hero.css"

function App() {
  
  return (
    <>
      <main>
        <TopBar></TopBar>
        <Header></Header>
        <Hero></Hero>
      </main>
    </>
  )
}

export default App
