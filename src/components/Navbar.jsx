import React, { useState } from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">Rohit Kumar</div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
