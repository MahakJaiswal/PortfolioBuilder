import React from 'react';
import "../../Styles/Login.css";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa6";

const socialButtons = [
  { icon: <FaGoogle color='white' />, className: "google" },
  { icon: <FaApple color='white' />, className: "apple" },
  { icon: <FaFacebook color='white' />, className: "twitter" }
];

const Login = () => {
  return (
    <>
      <h2>
        <Link className="nav-link textcolor" to="/">FolioNest</Link>
      </h2>
      <div className="container">
        <div className="heading">Log In</div>
        <div className='SignUp textcolor'>Don't have an account? <span ><a href="/Signup">Sign Up</a></span></div>
        <form className="form">
          <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
          <input required className="input" type="password" name="password" id="password" placeholder="Password" />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input className="login-button" type="submit" value="Log In" />
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            {socialButtons.map((button, index) => (
              <button key={index} className={`social-button ${button.className}`}>
                {button.icon}
              </button>
            ))}
          </div>
        </div>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </>
  );
};

export default Login;
