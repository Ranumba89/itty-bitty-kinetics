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
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchData = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Occupational Therapy", path: "/occupational-therapy" },
    { title: "Speech Therapy", path: "/speech-therapy" },
    { title: "Physical Therapy", path: "/physical-therapy" },
    { title: "Book Free Consultation", path: "/consultation" },
  ];
  // const handleSearchChange = (e) => {
  //   const value = e.target.value;
  //   setSearchInput(value);

  //   if (value.trim().length > 0) {
  //     const matches = Array.from(document.querySelectorAll("body *")).filter(
  //       (el) => el.innerText?.toLowerCase().includes(value.toLowerCase())
  //     );

  //     if (matches.length > 0) {
  //       // Scroll to the first match
  //       // matches[0].scrollIntoView({ behavior: "smooth", block: "center" });
  //       matches[0].style.backgroundColor = "#ffff99"; // Highlight
  //       setTimeout(() => (matches[0].style.backgroundColor = ""), 2000);
  //     }
  //   }
  //   const filtered = searchData.filter((item) =>
  //     item.title.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setSearchResults(value ? filtered : []);
  // };

  // const handleSelectResult = (path) => {
  //   setSearchInput("");
  //   setSearchResults([]);
  //   navigate(path);
  // };

  return (
    <>
      <div className="nav-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveTab("home");
          }}
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

              {/* <div
                onClick={() => navigate("/physical-therapy")}
                className="dropdown-item"
              >
                Physical Therapy
              </div> */}
              <div
                onClick={() => navigate("/feeding-therapy")}
                className="dropdown-item"
              >
                Feeding Therapy
              </div>
            </div>
          )}
        </div>
        {/* <NavLink
          to="/programs"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setActiveTab("programs")}
        >
          Programs
        </NavLink> */}
      </div>

      <div className="rightSide-container">
        {/* <div className="search-container">
          <FaMagnifyingGlass />
        </div> */}
        {/* <div className="search-container" style={{ position: "relative" }}>
          <FaMagnifyingGlass
            style={{
              marginLeft: 16,
            }}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            // onChange={handleSearchChange}
            style={{
              height: "100%",
              // marginLeft: 8,
              fontSize: "16px",
              padding: "8px",
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          />

          {searchResults.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "200px",
                background: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                zIndex: 99,
              }}
            >
              {searchResults.map((item, idx) => (
                <div
                  key={idx}
                  // onClick={() => handleSelectResult(item.path)}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div> */}
        <div
          className="bookNow-container"
          onClick={() => {
            navigate("/consultation");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          Book Now
        </div>
      </div>
    </>
  );
};
export default DesktopHeader;
