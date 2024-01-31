import React from "react";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-1">
        <video autoPlay={true} muted loop>
          <source src="/src/assets/video1.mp4" type="video/mp4" />
        </video>
        <p>
          BE A <span className="special-word">FREELANCER</span>
        </p>
      </div>
      <div className="hero-section-2">
        <video autoPlay={true} muted loop>
          <source src="/src/assets/video2.mp4" type="video/mp4" />
        </video>
        <p>SHOW YOUR VALUE</p>
      </div>
    </div>
  );
};

export default HeroSection;
