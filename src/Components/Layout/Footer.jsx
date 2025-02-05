import React from 'react';
import "../../Styles/Footer.css";
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok, FaPinterest, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const footerSections = [
  {
    title: "Product",
    items: ["Website Templates", "Website Builder", "Website Design", "FolioNest Features", "App Market", "Web Hosting", "Domain Names", "Website Accessibility", "Mobile App Builder"]
  },
  {
    title: "Solutions",
    items: ["Online Store", "Online Booking", "Restaurant Website", "Blog Website", "Portfolio Website", "eCommerce Website", "FolioNest Studio", "Enterprise Solutions", "Student Website", "Professional Tools", "Logo Maker"]
  },
  {
    title: "Learn",
    items: ["FolioNest Blog", "Privacy and Security Hub", "SEO Learning Hub", "FolioNest Encyclopedia"]
  },
  {
    title: "Support",
    items: ["Help Center", "Hire a Professional", "Report Abuse", "System Status"]
  },
  {
    title: "Company",
    items: ["Press & Media", "Investor Relations", "FolioNest Capital", "Accessibility Statement", "Patent Notice", "Sitemap", "Careers"]
  }
];

const Footer = () => {
  return (
    <footer className="footer bg-light text-light ">
      <div className="footer-container ">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-section about ">
          <h2 className='textcolor'>FolioNest</h2>
          <p>The FolioNest website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools—enabling anyone to create and grow online.</p>
          <ul>
            <li><strong>About</strong></li>
            <li><strong>Contact Us</strong></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
          <FaTiktok />
          <FaPinterest />
          <FaXTwitter />
          <FaLinkedin />
        </div>
        <div className="footer-links">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>&copy; 2006-2025 FolioNest.com, Inc</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
