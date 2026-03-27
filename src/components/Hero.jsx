import React from 'react'

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <video autoPlay muted loop className="hero-video" playsInline>
        <source src="https://cdn.pixabay.com/video/2024/03/20/206107-915330833_large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Praveenkumar B</h1>
          <p className="hero-subtitle">3rd Year AI/ML Student | Data Analysis & Visualization</p>
          <p className="hero-description">
            Transforming complex data into actionable insights. Exploring AI, ML, and advanced analytics 
            to solve real-world problems and drive intelligent decision-making.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Start Your Analysis</a>
            <a href="#projects" className="btn btn-secondary">View Case Studies</a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Fast Processing</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>Accurate Insights</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
