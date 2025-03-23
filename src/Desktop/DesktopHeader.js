import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const DesktopHeader = ({
  setActiveTab,
  isServices,
  handleScrollToServices,
  navigate,
}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
  return (
    <>
      <div className="nav-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setActiveTab("home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setActiveTab("about")}
        >
          About Us
        </NavLink>
        <div
          className="nav-services"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <NavLink
            className={() => (isServices ? "active" : "")}
            onClick={(e) => {
              e.preventDefault();
              handleScrollToServices();
            }}
            style={{ cursor: "pointer" }}
          >
            Services
          </NavLink>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div
                onClick={() => navigate("/occupational-therapy")}
                className="dropdown-item"
              >
                Occupational Therapy
              </div>
              <div
                onClick={() => navigate("/speech-therapy")}
                className="dropdown-item"
              >
                Speech Therapy
              </div>

              <div
                onClick={() => navigate("/physical-therapy")}
                className="dropdown-item"
              >
                Physical Therapy
              </div>
            </div>
          )}
        </div>
        <NavLink
          to="/programs"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setActiveTab("programs")}
        >
          Programs
        </NavLink>
      </div>

      <div className="rightSide-container">
        <div className="search-container">
          <FaMagnifyingGlass />
        </div>
        <div className="bookNow-container">Book Now</div>
      </div>
    </>
  );
};
export default DesktopHeader;
