import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './animations.js'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    // Close menu when clicking outside or on a link
    const closeMenu = () => setMenuOpen(false)
    document.addEventListener('click', closeMenu)
    
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <div className="app">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
