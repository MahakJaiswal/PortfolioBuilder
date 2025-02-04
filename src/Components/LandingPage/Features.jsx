import React from "react";
import { 
  FaEdit, FaDesktop, FaMobileAlt, FaEye, FaDownload, FaPhoneAlt 
} from "react-icons/fa";  
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import image4 from "../../Images/image4.webp";
import image5 from "../../Images/image5.jpg";
import image6 from "../../Images/image6.jpg";
import image7 from "../../Images/image7.jpg";
import "../../Styles/Features.css";

const featureImages = [image1, image2, image3, image4, image5, image6, image7];

const Features = () => {
  return (
    <div className="features-container">
      <h3 className="text-center  animate__animated animate__fadeIn mt-2 textcolor">
        Features of Portfolio Builder
      </h3>

      <div className="feature feature1 animate__animated animate__fadeIn animate__delay-1s">
        <div className="feature-content textcolor">
          <i><FaEdit /></i>
          <h2>1. Easy-to-Use Form Builder</h2>
          <p className="feature-paragraph">
            Our Portfolio Builder features an intuitive form that allows you to
            quickly fill in your information. No coding skills required—simply
            provide your details, and the builder will create a personalized
            portfolio for you.
          </p>
        </div>
        <img src={featureImages[6]} alt="Feature 1" className="feature-image" />
      </div>

      <div className="feature feature2 animate__animated animate__fadeIn animate__delay-2s">
        <img src={featureImages[5]} alt="Feature 2" className="feature-image" />

        <div className="feature-content textcolor">
          <i><FaDesktop /></i>
          <h2>2. Customizable Sections</h2>
          <p className="feature-paragraph">
            Customize various sections of your portfolio, including:
            <ul>
              <li>About Me</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
            Add or remove sections as per your need.
          </p>
        </div>
      </div>

      <div className="feature feature3 animate__animated animate__fadeIn animate__delay-3s">
        <div className="feature-content textcolor">
          <i><FaMobileAlt /></i>
          <h2>3. Project Portfolio Showcase</h2>
          <p className="feature-paragraph">
            Showcase your best projects with detailed descriptions, links, and
            images. Highlight your skills by sharing live project URLs.
          </p>
        </div>
        <img src={featureImages[4]} alt="Feature 3" className="feature-image" />
      </div>

      <div className="feature feature4 animate__animated animate__fadeIn animate__delay-4s">
        <img src={featureImages[0]} alt="Feature 4" className="feature-image" />

        <div className="feature-content textcolor">
          <i><FaEye /></i>
          <h2>4. Interactive Preview</h2>
          <p className="feature-paragraph">
            View your portfolio in real-time with an interactive preview that
            allows you to see changes immediately as you customize your sections.
          </p>
        </div>
      </div>

      <div className="feature feature5 animate__animated animate__fadeIn animate__delay-5s">
        <div className="feature-content textcolor">
          <i><FaDownload /></i>
          <h2>5. Easy Export Options</h2>
          <p className="feature-paragraph">
            Once your portfolio is ready, you can easily download it in various
            formats, including PDF and HTML, to share with potential employers.
          </p>
        </div>
        <img src={featureImages[1]} alt="Feature 5" className="feature-image" />
      </div>

    </div>
  );
};

export default Features;
