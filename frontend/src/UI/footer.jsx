import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TransparentMaprLogo.png";

const Footer = () => (
 <footer className="text-white pt-2 pb-0 mt-auto">
    <div className="container">
      
      {/* Mobile and Tablet Footer */}
      <div className="d-block d-md-none d-flex flex-column align-items-center text-center">
        <div className="mb-3">
          <img src={logo} alt="LAStormMapr Logo" height="40" className="mb-2" />
          <p className="mb-0 fw-bold">&copy; {new Date().getFullYear()} LAStormMapr</p>
          <small>Local storms. Local tools — stay safe with us.</small>
        </div>
        <nav className="footer-nav">
          <Link to="/" className="text-white me-3 text-decoration-none">Home</Link>
          <Link to="/map" className="text-white me-3 text-decoration-none">Shelter Map</Link>
          <Link to="/tips" className="text-white me-3 text-decoration-none">Tips</Link>
          <Link to="/about" className="text-white text-decoration-none">About</Link>
        </nav>
      </div>

      {/* Desktop Footer */}
      <div className="d-none d-md-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-3">
          {/* Left: Larger Logo */}
          <div>
            <img src={logo} alt="LAStormMapr Logo" height="100" className="mb-1" />
          </div>

          {/* Center: Home + Tips */}
          <nav className="footer-nav text-center">
          <Link to="/" className="text-white me-3 text-decoration-none">Home</Link>
          <Link to="/map" className="text-white me-3 text-decoration-none">Shelter Map</Link>
          <Link to="/tips" className="text-white me-3 text-decoration-none">Tips</Link>
          <Link to="/about" className="text-white text-decoration-none">About</Link>
        </nav>

          {/* Right: Placeholder (add social/icons later) */}
          <div></div>
        </div>

        {/* Bottom: Centered Copyright */}
        <div className="text-center">
          <p className="mb-0 fw-bold">&copy; {new Date().getFullYear()} LAStormMapr</p>
          <small>Local storms. Local tools — stay safe with us.</small>
        </div>
      </div>
      
    </div>
  </footer>
);

export default Footer;
