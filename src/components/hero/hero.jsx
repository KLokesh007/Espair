import React from "react";
import "./hero.css";


const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Left Section: Three horizontal cards */}
      <div className="left-section">
        <div className="card">
          <img src="https://res.cloudinary.com/dt5grsivq/image/upload/v1741025359/pexels-doterra-international-llc-2204678-10036647_lehotf.jpg" alt="TEQOYA Nomad" />
          <div className="card-content">
            <h3>TEQOYA Nomad</h3>
            <p>for your vehicles</p>
            <button>DISCOVER</button>
          </div>
        </div>
        <div className="card">
          <img src="https://res.cloudinary.com/dt5grsivq/image/upload/v1741025374/pexels-cottonbro-9707063_yvytxc.jpg "alt="TEQOYA T200" />
          <div className="card-content">
            <h3>TEQOYA T200</h3>
            <p>for your bedroom</p>
            <button>DISCOVER</button>
          </div>
        </div>
        <div className="card">
          <img src="https://res.cloudinary.com/dt5grsivq/image/upload/v1741026059/still-life-tech-device_wktyyn.jpg" alt="TEQOYA T450" />
          <div className="card-content">
            <h3>TEQOYA T450</h3>
            <p>for your large quiet rooms</p>
            <button>DISCOVER</button>
          </div>
        </div>
      </div>

      {/* Right Section: Single image */}
      <div className="right-section">
        <img src= "https://res.cloudinary.com/dt5grsivq/image/upload/v1741025081/pexels-eva-bronzini-6915312_byrr9z.jpg" alt="Cloud Technology" />
      </div>
    </div>
  );
};

export default HeroSection;
