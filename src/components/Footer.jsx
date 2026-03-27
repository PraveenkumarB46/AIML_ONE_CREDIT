import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Praveenkumar B. All rights reserved.</p>
        <p>Data Analyst | Built with React & Vite</p>
      </div>
    </footer>
  )
}

export default Footer
