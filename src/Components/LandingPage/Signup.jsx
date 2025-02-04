import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa6";

const Signup = () => {
  return (
    <>
      <h2 style={{ margin: 30, color: "#387478", fontSize: "bold" }}>
        <Link className="nav-link" to="/">FolioNest</Link>
      </h2>
      <div className="container">
        <div className="heading">Sign Up</div>
        <div className='SignUp'>Already have an account? <span style={{ color: "rgb(11, 134, 114)", cursor: "pointer" }}><a href="/Login">Login </a></span></div>
        <form className="form">
          <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
          <input required className="input" type="password" name="password" id="password" placeholder="Password" />
          <input required className="input" type="password" name="password" id="password" placeholder="Confirm Password" />
          <input className="login-button" type="submit" value="Sign Up" />
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign up with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <FaGoogle color='white' />
            </button>
            <button className="social-button twitter">
              <FaFacebook color='white' />
            </button>
          </div>
        </div>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </>
  )
}

export default Signup