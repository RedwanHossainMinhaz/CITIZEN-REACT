import React from 'react';
import './Footer.css';

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" stroke="#1a3fd4" strokeWidth="2" />
    <circle cx="16" cy="16" r="8" stroke="#16a34a" strokeWidth="2" />
    <circle cx="16" cy="16" r="3" fill="#1a3fd4" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <LogoIcon />
          <span className="footer__brand-name">CITIZEN</span>
          <span className="footer__sep">|</span>
          <p className="footer__copy">© 2024 CITIZEN Bangladesh. Empowering civic voices for a better tomorrow.</p>
        </div>

        <nav className="footer__links">
          <a href="#about">About Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Support</a>
          <a href="#terms">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
