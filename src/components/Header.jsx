import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="editorial-nav border-b">
        <div className="nav-left">
        </div>
        <div className="nav-center">
          <h1 className="logo">Elegant Event</h1>
          <span className="logo-script font-italic">in Venice</span>
        </div>
        <div className="nav-right">
          <a href="#contact" className="nav-cta">CONTATTACI</a>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in delay-1">
          <h1 className="hero-title">Elegant Event</h1>
          <p className="hero-subtitle font-italic">Exclusive Weddings & Parties</p>
          <a href="#services" className="btn-editorial-solid mt-4">Discover More</a>
        </div>
      </header>
    </>
  );
};
export default Header;
