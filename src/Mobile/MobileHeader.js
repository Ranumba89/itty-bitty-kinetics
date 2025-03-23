import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileHeader = ({
  setHamburgerMenuOpen,
  hamburgerMenuOpen,
  isServices,
  handleScrollToServices,
  navigate,
}) => (
  <>
    {/* Hamburger Menu for Mobile */}
    <div
      className="hamburger-menu"
      onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
    >
      {hamburgerMenuOpen ? (
        <FaTimes size={24} />
      ) : (
        <FaBars size={24} color="#0FAC55" />
      )}
    </div>

    {/* Mobile Navigation */}
    {hamburgerMenuOpen && (
      <div className="mobile-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setHamburgerMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setHamburgerMenuOpen(false)}
        >
          About Us
        </NavLink>
        <div className="mobile-dropdown">
          <NavLink
            className={isServices ? "active" : ""}
            onClick={handleScrollToServices}
            style={{ cursor: "pointer" }}
          >
            Services
          </NavLink>
          <div className="mobile-dropdown-menu">
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
        </div>
       
      </div>
    )}
  </>
);

export default MobileHeader;
