import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-center bg-light text-dark py-4 rounded ">
      <div className="container">
        {/* Navigation Links */}
        <nav className="mb-1 ">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="/About" className="nav-link link-hover">About us</a>
            </li>
            <li className="nav-item">
              <a href="/Contact" className="nav-link link-hover">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-hover">Jobs</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-hover">Press kit</a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <nav className="mb-1">
          <ul className="nav justify-content-center ">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="bi bi-youtube" style={{ fontSize: '24px' }}></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <aside>
          <p className="mb-0">Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
