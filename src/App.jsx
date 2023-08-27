import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App
