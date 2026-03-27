import React from 'react'

function Header({ menuOpen, toggleMenu }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">Data Analytics</a>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Cases</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact" className="nav-cta">Contact</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header
