import React from "react";
import { Link } from "react-router-dom";
import "../../style/header.css";
import Logo from "../../assets/Group 6.svg";
const Header = () => {
  return (
    <div>
      <div className="link">
        <div className="link-img">
          <img src={Logo} alt="" />
          <div className="link-menu">
            <p>
              <Link to="/">Home</Link>
              <Link to="/service">Service</Link>
              <Link to="/about">About Us</Link>
              <Link to="/extra">Extra Salespage</Link>
              <div className="link-button">
                <button>
                  <Link to="/free">Get your free guide now</Link>
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
