import React from "react";
import "../styles/about-us.css";
const AboutSection = () => {
  return (
    <div className="home-about_section">
      <div className="about-section_image">
        <img src="images/about-section_image.webp" alt="about-section-img" />
      </div>
      <div className="about-section_content">
        <div className="heading1">
          <h1>About Us</h1>
          <h2>
            Navigating the Digital <span>Unstoppable</span>
          </h2>
          <p>
            Founded in 2015, Cosmos Creative Agency has been pioneering digital
            experiences
            <br /> that transcend the ordinary. We're a team of dreamers,
            thinkers, and creators who
            <br />
            are passionate about pushing the boundaries of digital design.
          </p>
        </div>
        <div className="about-section-content_services">
            <div className="card1 card">
            <img src="images/icon1.svg" alt="Innovation" />
            <h1>Innovation</h1>
            <p>Pushing boundaries with forward-thinking solutions.</p>
          </div>
          <div className="card2 card">
            <img src="images/icon3.svg" alt="" />
            <h1>Excellence</h1>
            <p>Committed to delivering stellar results every time.</p>
          </div>
          <div className="card3 card">
            <img src="images/icon2.svg" alt="" />
            <h1>Experience</h1>
            <p>Over 8 years crafting digital journeys.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
