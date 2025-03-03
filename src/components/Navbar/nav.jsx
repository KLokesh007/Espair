import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          {/* <span className="logo-icon">●</span> */}
          <span className="logo-text">ESPAIR</span>
        </div>
      </div>
      <div className="nav-center">
        <ul className="nav-links">
          <li><a href="#">OUR PRODUCTS</a></li>
          {/* <li><a href="#">PRO</a></li>
          <li><a href="#">EFFICIENCY</a></li> */}
          {/* <li><a href="#">AIR QUALITY</a></li> */}
          <li><a href="#">WHO ARE WE?</a></li>
          <li><a href="#">HELP & CONTACT</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="language-dropdown">
          <span>ENGLISH ▼</span>    
        </div>
        {/* <div className="cart-icon">🛍️</div> */}
      </div>
    </nav>
  );
};

export default Navbar;
