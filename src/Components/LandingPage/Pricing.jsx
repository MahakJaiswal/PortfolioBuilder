import React from 'react'
import "../../Styles/Pricing.css"
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="Container-fluid" style={{backgroundColor:"white"}}>
      <h3 className="title textcolor" >Find the right plan for you</h3>
      <p className="subtitle">Create your site for free and choose a plan when youre ready.</p>
      <Link to="/Signup" className="nav-link">
      <button className="buttonSOF">
        <span className="button-content-SOF">Start for Free →</span>
      </button>
      </Link>
      <div className="plans">
        <div className="plan">
          <h3>Business Elite</h3>
          <p className="price">₹1,599/mo</p>
          <ul className="features">
            <li>Free domain for 1 year</li>
            <li><b>Unlimited</b> storage space</li>
            <li>Multi-cloud hosting</li>
            <li>Advanced marketing suite</li>
            <li>Accept payments</li>
            <li>Advanced eCommerce</li>
            <li>Advanced developer platform</li>
            <li>100 site collaborators</li>
          </ul>
        </div>
        <div className="plan">
          <span className="recommended">RECOMMENDED</span>
          <h3>Business</h3>
          <p className="price">₹799/mo</p>
          <ul className="features">
            <li>Free domain for 1 year</li>
            <li><b>100 GB</b> storage space</li>
            <li>Multi-cloud hosting</li>
            <li>Standard marketing suite</li>
            <li>Accept payments</li>
            <li>Standard eCommerce</li>
            <li>10 site collaborators</li>
          </ul>
        </div>
        <div className="plan">
          <h3>Core</h3>
          <p className="price">₹399/mo</p>
          <ul className="features">
            <li>Free domain for 1 year</li>
            <li><b>50 GB</b> storage space</li>
            <li>Multi-cloud hosting</li>
            <li>Basic marketing suite</li>
            <li>Accept payments</li>
            <li>Basic eCommerce</li>
            <li>5 site collaborators</li>
          </ul>
        </div>
        <div className="plan">
          <h3>Light</h3>
          <p className="price">₹199/mo</p>
          <ul className="features">
            <li>Free domain for 1 year</li>
            <li><b>2 GB</b> storage space</li>
            <li>Multi-cloud hosting</li>
            <li>Light marketing suite</li>
            <li>2 site collaborators</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing