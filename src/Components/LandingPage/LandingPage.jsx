
import React, { useRef } from 'react';
import Navbar from '../Layout/Navbar';
import Features from './Features';
import Testimonial from './Testimonal';
import Footer from '../Layout/Footer';
import Pricing from './Pricing';

const LandingPage = () => {
  const featuresRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);
  const PriceRef=useRef(null);
  return (
    <div>
      <Navbar 
        featuresRef={featuresRef}
        testimonialRef={testimonialRef}
        footerRef={footerRef}
        PriceRef={PriceRef}
      />
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={PriceRef}>
        <Pricing />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;