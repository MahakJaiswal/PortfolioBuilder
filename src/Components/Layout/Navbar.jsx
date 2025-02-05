import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ featuresRef, testimonialRef, PriceRef }) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Feature', action: () => scrollToSection(featuresRef) },
    { name: 'Pricing', action: () => scrollToSection(PriceRef) },
    { name: 'Testimonial', action: () => scrollToSection(testimonialRef) },
    { name: 'Login', link: '/Login' },
    { name: 'Get Started', link: '/SignUp' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: "white" }}>
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
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                {item.link ? (
                  <Link className="nav-link" to={item.link}>{item.name}</Link>
                ) : (
                  <Link className="nav-link" onClick={item.action}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
