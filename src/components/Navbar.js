import React, { useState } from 'react';
import './Navbar.css';

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" stroke="#1a3fd4" strokeWidth="2" />
    <circle cx="16" cy="16" r="8" stroke="#16a34a" strokeWidth="2" />
    <circle cx="16" cy="16" r="3" fill="#1a3fd4" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <LogoIcon />
          <span className="navbar__logo-text">CITIZEN</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links">
          <li><a href="#discussion" className="navbar__link">Discussion</a></li>
          <li><a href="#support" className="navbar__link">Support Hub</a></li>
          <li><a href="#complaints" className="navbar__link">Complaints</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <button className="navbar__icon-btn" aria-label="Notifications">
            <BellIcon />
          </button>
          <button className="navbar__icon-btn" aria-label="Profile">
            <UserIcon />
          </button>
          <button className="navbar__cta">Create Post</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <ul className="navbar__mobile-links">
            <li><a href="#discussion" onClick={() => setMenuOpen(false)}>Discussion</a></li>
            <li><a href="#support" onClick={() => setMenuOpen(false)}>Support Hub</a></li>
            <li><a href="#complaints" onClick={() => setMenuOpen(false)}>Complaints</a></li>
          </ul>
          <div className="navbar__mobile-actions">
            <button className="navbar__icon-btn"><BellIcon /> Notifications</button>
            <button className="navbar__icon-btn"><UserIcon /> Profile</button>
            <button className="navbar__cta" style={{ width: '100%' }}>Create Post</button>
          </div>
        </div>
      )}
    </nav>
  );
}
