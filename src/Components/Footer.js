import React from "react";
import "./css/Footer.css";
import phone from "../Images/phone (1).png";
import email from "../Images/email.png";
import twitter from "../Images/twitter (3).png";
import instagram from "../Images/instagram (2).png";
import linkdin from "../Images/linkedin (3).png";
import facebook from "../Images/facebook (1).png";
import { NavLink, useNavigate } from "react-router-dom";
import Logo2 from "../Images/itty bitty logo 9.png";
import { useMediaQuery } from "@mantine/hooks";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const iconSize = 39;
  const navigate = useNavigate();

  const handleScrollToServices = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("servicesSections");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 200);
  };

  return (
    <>
      {isMobile ? (
        <div className="foot-container">
          <div className="foot-left">
            <div
              className="foot-get-in-touch"
              style={{
                // backgroundColor: "white",
                // color: "#a8d8ff",
                color: "black",
                padding: "4px",
                borderRadius: "8px",
                textShadow: "-2px 2px 4px white",
              }}
            >
              Get in touch with us
            </div>
            <div className="foot-contact">
              <div className="foot-phone-number">
                {/* <img src={phone} alt="phone" className="foot-img" /> */}
                <MdOutlineLocalPhone className="foot-img" />
                <p>Phone:(123) 456-7890</p>
              </div>
              <div className="foot-email">
                <CiMail className="foot-img" />
                {/* <img src={email} alt="phone" className="foot-img" /> */}
                <p>Email: info@ittybitty.com</p>
              </div>
            </div>
          </div>
          <div className="foot-right">
            <div className="foot-socials">
              <div className="socials-header">Follow us</div>
              <div className="socials-icons">
                <FaFacebookSquare size={iconSize} />
                <FaSquareXTwitter size={iconSize} />
                <FaLinkedin size={iconSize} />
                <FaInstagramSquare size={iconSize} />
              </div>
              {/* <div className="IP-rights">
                <div>Copyright © Itty Bitty Kinetics 2024</div>
              </div> */}
            </div>

            <div className="quick-links">
              <div className="quick-links-header"> Quick Links</div>
              <div className="links-section">
                <div
                  onClick={() => {
                    handleScrollToServices();
                  }}
                  className="links"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Service
                </div>

                <div className="links"> Book Free Consultation</div>
              </div>
            </div>
            <div className="foot-slogan">
              <img className="footer-logo" src={Logo2} alt="itty logo" />
              <p>Building Better Tomorrows with Every Little Movement</p>
            </div>
            <div className="IP-rights">
              <div>Copyright © Itty Bitty Kinetics 2024</div>
              <div>Terms of Service</div>
              <div>Privacy policy</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="foot-container">
          <div className="foot-left">
            <div className="foot-get-in-touch">Get in touch with us</div>
            <div className="foot-contact">
              <div className="foot-phone-number">
                <MdOutlineLocalPhone className="foot-img" />

                <p>Phone:(123) 456-7890</p>
              </div>
              <div className="foot-email">
                <CiMail className="foot-img" />

                <p>Email: info@ittybitty.com</p>
              </div>
            </div>
          </div>
          <div className="foot-right">
            <div className="foot-socials">
              <div className="socials-header">Follow us</div>
              <div className="socials-icons">
                <FaFacebookSquare size={iconSize} />
                <FaSquareXTwitter size={iconSize} />
                <FaLinkedin size={iconSize} />
                <FaInstagramSquare size={iconSize} />
              </div>
              {/* <div className="IP-rights">
                <div>Copyright © Itty Bitty Kinetics 2024</div>
              </div> */}
            </div>

            <div className="quick-links">
              <div className="quick-links-header"> Quick Links</div>
              <div className="links-section">
                <div
                  onClick={() => {
                    handleScrollToServices();
                  }}
                  className="links"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Service
                </div>

                <div className="links"> Book Free Consultation</div>
              </div>
            </div>
          </div>
          <div className="foot-slogan">
            <img className="footer-logo" src={Logo2} alt="itty logo" />
            <p>Building Better Tomorrows with Every Little Movement</p>
          </div>
          <div className="IP-rights">
            <div>Copyright © Itty Bitty Kinetics 2024</div>
            <div>Terms of Service</div>
            <div>Privacy policy</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
