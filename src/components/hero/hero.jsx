import React from "react";
import "./hero.css";

const HeroSection = () => {
  return (
    <div className="outer-container">
      <section className="hero-container">
        <div className="hero-column">
          <div className="vertical-text">KITCHEN VENTILATION</div>
        </div>
        <div className="hero-column">
          <div className="vertical-text">AIR FILTERS</div>
        </div>
        <div className="hero-column">
          <div className="vertical-text">AIR CLEANING EQUIPMENTS</div>
        </div>
      </section>
      <div className="right-image-container">
        <img src="https://res.cloudinary.com/dt5grsivq/image/upload/v1741320491/WhatsApp_Image_2025-03-05_at_22.35.15_rf7sv8.jpg" alt="Right section image" />
      </div>
    </div>
  );
};

export default HeroSection;
