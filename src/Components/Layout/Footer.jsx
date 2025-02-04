import "../../Styles/Footer.css";
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok, FaPinterest, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-light text-light" >

      <div className="footer-container">
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>Website Templates</li>
            <li>Website Builder</li>
            <li>Website Design</li>
            <li>FolioNest Features</li>
            <li>App Market</li>
            <li>Web Hosting</li>
            <li>Domain Names</li>
            <li>Website Accessibility</li>
            <li>Mobile App Builder</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Solutions</h4>
          <ul>
            <li>Online Store</li>
            <li>Online Booking</li>
            <li>Restaurant Website</li>
            <li>Blog Website</li>
            <li>Portfolio Website</li>
            <li>eCommerce Website</li>
            <li>FolioNest Studio</li>
            <li>Enterprise Solutions</li>
            <li>Student Website</li>
            <li>Professional Tools</li>
            <li>Logo Maker</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Learn</h4>
          <ul>
            <li>FolioNest Blog</li>
            <li>Privacy and Security Hub</li>
            <li>SEO Learning Hub</li>
            <li>FolioNest Encyclopedia</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Hire a Professional</li>
            <li>Report Abuse</li>
            <li>System Status</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Press & Media</li>
            <li>Investor Relations</li>
            <li>FolioNest Capital</li>
            <li>Accessibility Statement</li>
            <li>Patent Notice</li>
            <li>Sitemap</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-section about">
          <h2>FolioNest </h2>
          <p>The FolioNest website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools—enabling anyone to create and grow online.</p>
          <ul>
            <li ><strong>About</strong></li>
            <li ><strong>Contact Us</strong></li>
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