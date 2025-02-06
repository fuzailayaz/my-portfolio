import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="hero" smooth={true} duration={500} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
              </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;