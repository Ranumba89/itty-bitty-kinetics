import React from "react";
import Logo2 from "../Images/logo2.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./css/Header.css"

const Header = () => {
  return (
    <div className="sticky-container">
    <div className="header-container" >
      <img className="header-logo" src={Logo2} alt="itty logo" />

      <div className="nav-container">
        <div className="nav-home">Home</div>
        <div className="nav-aboutUs">About Us</div>
        <div className="nav-services">Services</div>
      </div>

      <div className="rightSide-contianer">
        <div className="search-contianer">
          <FaMagnifyingGlass />
        </div>
        <div className="bookNow-contianer">Book Now</div>
      </div>
    </div>
    </div>
  );
};

export default Header;
