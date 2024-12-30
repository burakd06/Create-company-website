
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-container">
        <Link to="/" className="mobile-navbar-logo">Rahat Girişim</Link>
        <button className="mobile-navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        {isOpen && (
          <ul className="mobile-navbar-menu">
            <li className="mobile-navbar-item"><Link to="/" className="mobile-navbar-link">Ana Sayfa</Link></li>
            <li className="mobile-navbar-item"><Link to="/about" className="mobile-navbar-link">Hakkımızda</Link></li>
            <li className="mobile-navbar-item"><Link to="/prices" className="mobile-navbar-link">Fiyatlarımız</Link></li>
            <li className="mobile-navbar-item"><Link to="/products" className="mobile-navbar-link">Ürünlerimiz</Link></li>
            <li className="mobile-navbar-item"><Link to="/contact" className="mobile-navbar-link">İletişim</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default MobileNavbar;
