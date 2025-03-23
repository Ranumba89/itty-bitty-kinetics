import React, { useEffect, useState } from "react";
import Logo2 from "../Images/itty bitty logo 9.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useMediaQuery } from "@mantine/hooks";
// import { Link } from "react-router-dom";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./css/Header.css";
import AnimatedLogo from "./AnimatedLogo";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgChevronDown } from "react-icons/cg";
import { a } from "framer-motion/client";
import MobileHeader from "../Mobile/MobileHeader";
import DesktopHeader from "../Desktop/DesktopHeader";
import HamburgerOverlay from "./HamburgerOverlay";
const Header = () => {
  const [activeTab, setActiveTab] = useState("home"); // Track the active link
  const [isServices, setIsServices] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const headerNavArray = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About Us",
      to: "/about",
    },
    {
      name: "Services",
      to: "/services",
      dropDown: [
        {
          name: "Occupational Therapy",
          to: "/occupational-therapy",
        },
        {
          name: "Speech Therapy",
          to: "/speech-therapy",
        },
        {
          name: "Physical Therapy",
          to: "/physical-therapy",
        },
      ],
    },
    {
      name: "Programs",
      to: "/programs",
    },
  ];

  const handleScrollToServices = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("servicesSections");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 200);
  };
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("servicesSections");

      if (section) {
        const rect = section.getBoundingClientRect();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/occupational-therapy" ||
      location.pathname === "/speech-therapy" ||
      location.pathname === "/physical-therapy"
    ) {
      setIsServices(true);
    } else {
      setIsServices(false);
    }
  }, [location]);

  return (
    <>
      {hamburgerMenuOpen ? (
        <HamburgerOverlay
          setHamburgerMenuOpen={setHamburgerMenuOpen}
          headerNavArray={headerNavArray}
          setActiveTab={setActiveTab}
          setServicesDropdownOpen={setServicesDropdownOpen}
          servicesDropdownOpen={servicesDropdownOpen}
        />
      ) : (
        <div className="sticky-container">
          <div className="header-container">
            <AnimatedLogo />
            {isMobile ? (
              <MobileHeader
                setHamburgerMenuOpen={setHamburgerMenuOpen}
                hamburgerMenuOpen={hamburgerMenuOpen}
                isServices={isServices}
                handleScrollToServices={handleScrollToServices}
                navigate={navigate}
              />
            ) : (
              <DesktopHeader
                headerNavArray={headerNavArray}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isServices={isServices}
                handleScrollToServices={handleScrollToServices}
                navigate={navigate}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
