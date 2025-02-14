import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu before navigating to a new page
  const closeMenuBeforeNavigation = () => {
    setIsMenuOpen(false);
  };

  // Close menu on route change (ensures menu closes even if navigation happens another way)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo">E-Learn</div>

      {/* Hamburger Icon */}
      <div className="right-section">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink exact to="/" activeClassName="active" onClick={closeMenuBeforeNavigation}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeClassName="active" onClick={closeMenuBeforeNavigation}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={closeMenuBeforeNavigation}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" onClick={closeMenuBeforeNavigation}>
            Contact Us
          </NavLink>
        </li>

        {/* Show Auth Buttons in Mobile View */}
        {isMenuOpen && (
          <div className="auth-buttons-mobile">
            <button className="login-btn" onClick={closeMenuBeforeNavigation}>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </button>
            <button className="signup-btn" onClick={closeMenuBeforeNavigation}>
              <NavLink to="/signup" activeClassName="active">
                Signup
              </NavLink>
            </button>
          </div>
        )}
      </ul>

      {/* Auth Buttons for Large Screens */}
      <div className="auth-buttons">
        <button className="login-btn">
          <NavLink to="/login" activeClassName="active" style={{ textDecoration: 'none', color: 'inherit' }}>
            Login
          </NavLink>
        </button>
        <button className="signup-btn">
          <NavLink to="/signup" activeClassName="active" style={{ textDecoration: 'none', color: 'inherit' }}>
            Signup
          </NavLink>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
