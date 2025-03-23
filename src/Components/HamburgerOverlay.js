import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CgChevronDown } from "react-icons/cg";

const HamburgerOverlay = ({
  setHamburgerMenuOpen,
  headerNavArray,
  setActiveTab,
  setServicesDropdownOpen,
  servicesDropdownOpen,
}) => (
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
            <div key={index}>
              <NavLink
                to={navItem.to}
                className={({ isActive }) =>
                  `dropdown-navlink ${isActive && "active"}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(navItem.name);
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
              >
                <div className="nav-item">{navItem.name}</div>
                <div className="nav-item-icon">
                  {servicesDropdownOpen ? (
                    <CgChevronDown
                      size={24}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  ) : (
                    <CgChevronDown size={24} className="chevron-icon" />
                  )}
                </div>
              </NavLink>
              {servicesDropdownOpen &&
                navItem.dropDown.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `services-dropdown ${isActive && "active"}`
                    }
                    onClick={() => {
                      setActiveTab(item.name);
                      setHamburgerMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
            </div>
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

export default HamburgerOverlay;
