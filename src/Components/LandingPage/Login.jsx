
import React from 'react'
import "../../Styles/Login.css"
import { Link } from 'react-router-dom';
import { FaFacebook,  FaGoogle, FaApple } from "react-icons/fa6";



const Login = () => {
    return (  
      <>         
      <h2 style={{ margin: 30,color:"#387478",fontSize:"bold"}}>
        <Link className="nav-link" to="/">FolioNest</Link>
      </h2>      
      <div className="container">
      <div className="heading">Log In</div>
      <div className='SignUp'>Don't have an account? <span style={{ color: "rgb(4, 112, 107)", cursor: "pointer" }}><a href="/Signup">Sign Up</a></span></div>
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
          <button className="social-button google">
            <FaGoogle color='white'/>
          </button>
          <button className="social-button apple">            
            <FaApple color='white'/>
          </button>
          <button className="social-button twitter">            
              <FaFacebook color='white'/>
          </button>
        </div>
      </div>
      <span className="agreement">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>   
    </>
    );
  };
  
  export default Login;