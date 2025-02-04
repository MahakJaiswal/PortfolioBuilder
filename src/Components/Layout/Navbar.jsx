import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ featuresRef, testimonialRef ,PriceRef}) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark navbar-gradient fixed-top" style={{background: "linear-gradient(to bottom,#243642,#243642)"}}>
     <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{background:"white"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h2 className="mb-1 textcolor">FolioNest</h2>
        </Link>
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" onClick={() => scrollToSection(featuresRef)}>
                Feature
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  onClick={() => scrollToSection(PriceRef)}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={() => scrollToSection(testimonialRef)}>
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SignUp">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
