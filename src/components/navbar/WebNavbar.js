import React from "react";
import { Link } from "react-router-dom";
import './WebNavbar.css';

function WebNavbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo kısmı */}
                <Link to="/" className="navbar-logo">
                    Rahat Girişim
                </Link>

                {/* Menü kısmı */}
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbarHome">Ana Sayfa</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbarAbout">Hakkımızda</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/prices" className="navbarPrice">Fiyatlarımız</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/products" className="navbarProduct">Ürünlerimiz</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbarContact">İletişim</Link>
                    </li>
                    
                </ul>

            
                <Link to="/login" className="navbar-login">
                    Giriş Yap
                </Link>
            </div>
        </nav>
    );
}

export default WebNavbar;
