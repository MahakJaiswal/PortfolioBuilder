import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Styles/Testimonal.css";

const TestimonialPage = () => {
  const [slidePercentage, setSlidePercentage] = useState(33.33);

  useEffect(() => {
    const updateSlidePercentage = () => {
      if (window.innerWidth >= 1024) {
        setSlidePercentage(33.33); 
      } else if (window.innerWidth >= 768) {
        setSlidePercentage(50);
      } else {
        setSlidePercentage(100); 
      }
    };

    updateSlidePercentage();
    window.addEventListener("resize", updateSlidePercentage);

    return () => window.removeEventListener("resize", updateSlidePercentage);
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      title: "Software Engineer",
      company: "Acme Corp",
      quote:
        "FolioNest has been a game-changer for showcasing my projects. The dark theme is sleek, and the customization options are fantastic. Highly recommend!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Jane Smith",
      title: "UI/UX Designer",
      company: "Design Co.",
      quote:
        "As a designer, presentation is key. FolioNest's elegant design and user-friendly interface made building my portfolio a breeze. The dark blue gradient is perfect!",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "David Lee",
      title: "Freelance Developer",
      company: "Self-Employed",
      quote:
        "I've tried other portfolio builders, but FolioNest stands out. The performance is excellent, and the dark theme makes my projects pop. Love it!",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Emily Clark",
      title: "Product Manager",
      company: "Tech Solutions",
      quote:
        "FolioNest’s simplicity and modern aesthetics make it my go-to choice for a portfolio. Highly recommend for professionals!",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  ];

  return (
    <div className="page-container">
      <h2 className="title">What Our Users Say</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={slidePercentage} 
      >
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-container" key={index}>
            <p className="quote">"{testimonial.quote}"</p>
            <div className="user-info">
              <img
                className="user-image"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="user-details">
                <h3 className="user-name">{testimonial.name}</h3>
                <p className="user-title">
                  {testimonial.title} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialPage;
