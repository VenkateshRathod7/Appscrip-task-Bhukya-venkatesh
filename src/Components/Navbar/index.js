import React, {useState} from 'react'
import './index.css' // Import the CSS for Navbar

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="nav-title">LOGO</div>

      <div className="nav-icons">
        <span className="icon">🔍</span>
        <span className="icon">🛒</span>
        <span className="icon">👤</span>
        <span className="icon">ENG ▼</span>
      </div>
      <div className="hamburger">
        <button type="button" onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
