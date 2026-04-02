import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="editorial-footer section-padding">
      <div className="container">
        <div className="footer-content text-center">
          <h2 className="footer-logo">Elegant Event<br/>in Venice</h2>
          
          <div className="footer-info">
            <p>Venezia, Italia</p>
            <p>info@eleganteventinvenice.com | +39 123 456 7890</p>
          </div>
          
          <div className="footer-links">
            <a href="https://www.facebook.com/ElegantEventInVenice" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        
        <div className="footer-bottom border-t text-center">
          <p>&copy; {new Date().getFullYear()} Elegant Event In Venice. P.IVA 12345678901 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
