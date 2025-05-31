import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import AboutUsDropdown from './AboutUsDropdown';
import ServicesDropdown from './ServicesDropdown';

const HamburgerOverlay = ({
  setHamburgerMenuOpen,
  headerNavArray,
  setActiveTab,
  setServicesDropdownOpen,
  servicesDropdownOpen,
  aboutDropdownOpen,
  setAboutDropdownOpen,
}) => {
  const navigate = useNavigate();
  const handleCloseDropdowns = () => {
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
  }
  return (
    <div className="mobile-menu">
      <FaTimes
        size={24}
        onClick={() => {
          setHamburgerMenuOpen(false);
        }}
        className="close-icon"
      />
      <div className="mobile-nav-container">
        {headerNavArray.map((navItem, index) => (
          <>
            {navItem.dropDown ? (
              <ServicesDropdown

                {...{
                  index,
                  navItem,
                  setActiveTab,
                  setServicesDropdownOpen,
                  servicesDropdownOpen,
                  setHamburgerMenuOpen,
                  handleCloseDropdowns,
                }}
              />
            ) : navItem.name === "About Us" ? (
              <AboutUsDropdown {...{
                  index,
                  setAboutDropdownOpen,
                  aboutDropdownOpen,
                  navigate,
                  navItem,
                  setTimeout,
                  document,
                  setHamburgerMenuOpen,
                  handleCloseDropdowns
                }}
              />
            ) : (
              <NavLink
                key={index}
                to={navItem.to}
                className={({ isActive }) =>
                  `nav-item-name ${isActive && "active"}`
                }
                onClick={() => {
                  setActiveTab(navItem.name);
                  setHamburgerMenuOpen(false);

                }}
              >
                {navItem.name}
              </NavLink>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default HamburgerOverlay;
