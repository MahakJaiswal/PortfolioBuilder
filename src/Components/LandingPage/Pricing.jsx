import React from 'react';
import "../../Styles/Pricing.css";
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: "Business Elite",
    price: "₹1,599/mo",
    features: [
      "Free domain for 1 year",
      "Unlimited storage space",
      "Multi-cloud hosting",
      "Advanced marketing suite",
      "Accept payments",
      "Advanced eCommerce",
      "Advanced developer platform",
      "100 site collaborators"
    ],
    recommended: false
  },
  {
    name: "Business",
    price: "₹799/mo",
    features: [
      "Free domain for 1 year",
      "100 GB storage space",
      "Multi-cloud hosting",
      "Standard marketing suite",
      "Accept payments",
      "Standard eCommerce",
      "10 site collaborators"
    ],
    recommended: true
  },
  {
    name: "Core",
    price: "₹399/mo",
    features: [
      "Free domain for 1 year",
      "50 GB storage space",
      "Multi-cloud hosting",
      "Basic marketing suite",
      "Accept payments",
      "Basic eCommerce",
      "5 site collaborators"
    ],
    recommended: false
  },
  {
    name: "Light",
    price: "₹199/mo",
    features: [
      "Free domain for 1 year",
      "2 GB storage space",
      "Multi-cloud hosting",
      "Light marketing suite",
      "2 site collaborators"
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <div className="Container-fluid" style={{ backgroundColor: "white" }}>
      <h3 className="title textcolor">Find the right plan for you</h3>
      <p className="subtitle">Create your site for free and choose a plan when you're ready.</p>
      <Link to="/Signup" className="nav-link">
        <button className="buttonSOF">
          <span className="button-content-SOF">Start for Free →</span>
        </button>
      </Link>
      <div className="plans">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="plan">
            {plan.recommended && <span className="recommended">RECOMMENDED</span>}
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
