import React from "react";
import { Routes, Route } from "react-router-dom";
import Features from "./LandingPage/Features";
import LandingPage from "./LandingPage/LandingPage"; 
import Testimonials from "./LandingPage/Testimonal";
import Login from "./LandingPage/Login";
import Signup from "./LandingPage/Signup";
import Pricing from "./LandingPage/Pricing";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/Feature" element={<Features />} />
      <Route path="/Testimonal" element={<Testimonials />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<Signup />} />
      <Route path="/Pricing" element={<Pricing />} />



    </Routes>
  );
};

export default Routing;
