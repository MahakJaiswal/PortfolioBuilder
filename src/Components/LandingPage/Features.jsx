import React from "react";
import { 
  FaEdit, FaDesktop, FaMobileAlt, FaEye, FaDownload
} from "react-icons/fa";  
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import image4 from "../../Images/image4.webp";
import image5 from "../../Images/image5.jpg";
import image6 from "../../Images/image6.jpg";
import image7 from "../../Images/image7.jpg";
import "../../Styles/Features.css";

const featureData = [
  {
    icon: <FaEdit />, 
    title: "Easy-to-Use Form Builder", 
    description: "Our Portfolio Builder features an intuitive form that allows you to quickly fill in your information. No coding skills required—simply provide your details, and  create a personalized portfolio for you.",
    image: image7,
    reverse: false,
  },
  {
    icon: <FaDesktop />, 
    title: "Customizable Sections", 
    description: "Customize various sections of your portfolio, including:",
    list: ["About Me", "Skills", "Projects", "Contact"],
    image: image6,
    reverse: true,
  },
  {
    icon: <FaMobileAlt />, 
    title: "Project Portfolio Showcase", 
    description: "Showcase your best projects with detailed descriptions, links, and images. Highlight your skills by sharing live project URLs.",
    image: image5,
    reverse: false,
  },
  {
    icon: <FaEye />, 
    title: "Interactive Preview", 
    description: "View your portfolio in real-time with an interactive preview that allows you to see changes immediately as you customize your sections.",
    image: image1,
    reverse: true,
  },
  {
    icon: <FaDownload />, 
    title: "Easy Export Options", 
    description: "Once your portfolio is ready, you can easily download it in various formats, including PDF and HTML, to share with potential employers.",
    image: image2,
    reverse: false,
  }
];

const Features = () => {
  return (
    <div className="features-container">
      <h3 className="text-center animate__animated animate__fadeIn mt-2 ">
        Features of Portfolio Builder
      </h3>
      {featureData.map((feature, index) => (
        <div 
          key={index} 
          className={`feature feature${index + 1} animate__animated animate__fadeIn animate__delay-${index + 1}s`}
        >
          {feature.reverse ? (
            <>
              <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image" />
              <div className="feature-content textcolor">
                {/* <i>{feature.icon}</i> */}
                {/* <h2>{index + 1}. {feature.title}</h2> */}
                <h2>{feature.title}</h2>
                <p className="feature-paragraph">{feature.description}</p>
                {feature.list && (
                  <ul>
                    {feature.list.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="feature-content textcolor">
                <h2>{feature.title}</h2>
                <p className="feature-paragraph">{feature.description}</p>
                {feature.list && (
                  <ul>
                    {feature.list.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                )}
              </div>
              <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Features;
