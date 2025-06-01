import React from "react";
import { CgChevronDown } from "react-icons/cg";

const AboutUsDropdown = ({
  index,
  setAboutDropdownOpen,
  aboutDropdownOpen,
  navigate,
  navItem,
  setTimeout,
  document,
  setHamburgerMenuOpen,
  handleCloseDropdowns,
}) => (
  <div key={index}>
    <div
      className="dropdown-navlink"
      onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
    >
      <div className="nav-item">About Us</div>
      <div className="nav-item-icon">
        <CgChevronDown
          size={24}
          style={{
            transform: aboutDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
    </div>
    {aboutDropdownOpen && (
      <div>
        {[
          { name: "Meet the Founder", id: "about-us-mobile-container" },
          { name: "Mission & Vision", id: "mission-vision" },
          // { name: "Our Approach", id: "our-approach" },
        ].map((section, idx) => (
          <div
            key={idx}
            className="services-dropdown"
            onClick={() => {
              navigate(navItem.to);
              setTimeout(() => {
                const elementId = document.getElementById(section.id);
                window.scrollTo({
                  top: elementId.offsetTop - 70,
                  behavior: "smooth",
                });
              }, 200);
              setHamburgerMenuOpen(false);
              handleCloseDropdowns();
            }}
          >
            {section.name}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default AboutUsDropdown;
