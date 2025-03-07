"use client"

import { useState, useEffect } from "react"
import { Menu, ChevronDown } from "lucide-react"
import "./nav.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="nav-left">
          <div className="logo">
            <img src="https://res.cloudinary.com/dt5grsivq/image/upload/v1741320491/WhatsApp_Image_2025-03-05_at_22.35.15_rf7sv8.jpg" alt="Logo" className="logo-icon" />
            <span className="logo-text">ESPAIR</span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <Menu size={24} />
        </button>

        {/* Desktop navigation */}
        <div className="nav-center desktop-nav">
          <ul className="nav-links">
            <li>
              <a href="#">OUR PRODUCTS</a>
            </li>
            <li>
              <a href="#">WHO ARE WE?</a>
            </li>
            <li>
              <a href="#">HELP & CONTACT</a>
            </li>
          </ul>
        </div>

        {/* Mobile navigation dropdown */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <a href="#" onClick={toggleMenu}>
                OUR PRODUCTS
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                WHO ARE WE?
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                HELP & CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

