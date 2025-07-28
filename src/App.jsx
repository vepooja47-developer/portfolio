import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Education from './pages/education'
import Projects from './pages/projects'
import Contact from './pages/contact'




export default function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    
    </>
  )
}
