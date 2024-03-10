import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="/Home">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/About">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/Contact">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/Team">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy; 2024 MARCOS AIRLINES | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;