import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="editorial-footer section-padding">
      <div className="container">
        <div className="footer-content text-center">
          <div className="footer-brand">
            <img src="/logo.jpg" alt="Elegant Event in Venice" className="footer-logo-badge" />
            <h2 className="footer-logo">
              Elegant Event<br/>
              <span className="footer-logo-script font-italic">in Venice</span>
            </h2>
          </div>

          <div className="footer-contact mt-4">
            <p>Venezia, Italia</p>
            <p>Tel: <a href="tel:+393899470411">+39 389 947 0411</a></p>
          </div>

          <div className="footer-links">
            <a 
              href="https://www.instagram.com/elegant_event_in_venice/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Instagram"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/ElegantEventInVenice" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Facebook"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom border-t text-center">
          <p>&copy; {new Date().getFullYear()} Elegant Event In Venice. P.IVA 04990630271 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
