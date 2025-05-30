import React from "react";
import "../styles/portfolioSlider.css";

const PortfolioSlider = () => {
  const totalItems = 10;

  // Generate project data
  const projects = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
    image: `/images/Project${index + 1}.webp`,
    alt: `Project ${index + 1}`,
  }));

  const getItemStyle = (position) => {
    const angle = ((position - 1) / totalItems) * 360;
    return {
      transform: `rotateY(${angle}deg)  translateZ(550px)`,
    };
  };

  return (
    <div className="portfolio_banner">
      <div className="portfolio_banner-slider">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="portfolio-slider_item"
            style={getItemStyle(index + 1)}
          >
            <img src={project.image} alt={project.alt} />
          </div>
        ))}
      </div>
      <div className="portfolio_banner-content">
        {/* <h1>PORTFOLIO</h1> */}
        <div className="portfolio_banner-copy">
          <h2>Creative Works That Speak for Themselves</h2>
          <p>
            <b>From concept to creation</b>
          </p>
          <p>
            Explore a curated selection of our most impactful projects —
            blending design, technology, and storytelling.
          </p>
        </div>
        <div className="portfolio_model">
          {/* <img src="/images/" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
