import React from "react";
import { NavLink } from "react-router-dom";
import { CgChevronDown } from "react-icons/cg";

const ServicesDropdown = ({
  index,
  navItem,
  setActiveTab,
  setServicesDropdownOpen,
  servicesDropdownOpen,
  setHamburgerMenuOpen,
  handleCloseDropdowns,
}) => (
  <div key={index}>
    <NavLink
      to={navItem.to}
      className={({ isActive }) => `dropdown-navlink ${isActive && "active"}`}
      onClick={(e) => {
        e.preventDefault();
        setActiveTab(navItem.name);
        setServicesDropdownOpen(!servicesDropdownOpen);
      }}
    >
      <div className="nav-item">{navItem.name}</div>
      <div className="nav-item-icon">
        {servicesDropdownOpen ? (
          <CgChevronDown size={24} style={{ transform: "rotate(180deg)" }} />
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
            handleCloseDropdowns();
          }}
        >
          {item.name}
        </NavLink>
      ))}
  </div>
);

export default ServicesDropdown;
