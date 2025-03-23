import React from "react";
import "./css/Footer.css";
import phone from "../Images/phone (1).png";
import email from "../Images/email.png";
import twitter from "../Images/twitter (3).png";
import instagram from "../Images/instagram (2).png";
import linkdin from "../Images/linkedin (3).png";
import facebook from "../Images/facebook (1).png";
import { NavLink } from "react-router-dom";
import Logo2 from "../Images/itty bitty logo 9.png";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <div className="foot-container">
          <div className="foot-left">
            <div className="foot-get-in-touch">Get in touch with us</div>
            <div className="foot-contact">
              <div className="foot-phone-number">
                <img src={phone} alt="phone" className="foot-img" />
                <p>Phone:(123) 456-7890</p>
              </div>
              <div className="foot-email">
                <img src={email} alt="phone" className="foot-img" />
                <p>Email: info@ittybitty.com</p>
              </div>
            </div>
          </div>
          <div className="foot-right">
            <div className="foot-socials">
              <div className="socials-header">Follow us</div>
              <div className="socials-icons">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={linkdin} alt="linkdin" />
                <img src={instagram} alt="instagram" />
              </div>
              {/* <div className="IP-rights">
                <div>Copyright © Itty Bitty Kinetics 2024</div>
              </div> */}
            </div>

            <div className="quick-links">
              <div className="quick-links-header"> Quick Links</div>
              <div className="links-section">
                <NavLink
                  to="/services"
                  className="links"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Service
                </NavLink>

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
                <img src={phone} alt="phone" className="foot-img" />
                <p>Phone:(123) 456-7890</p>
              </div>
              <div className="foot-email">
                <img src={email} alt="phone" className="foot-img" />
                <p>Email: info@ittybitty.com</p>
              </div>
            </div>
          </div>
          <div className="foot-right">
            <div className="foot-socials">
              <div className="socials-header">Follow us</div>
              <div className="socials-icons">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={linkdin} alt="linkdin" />
                <img src={instagram} alt="instagram" />
              </div>
              {/* <div className="IP-rights">
                <div>Copyright © Itty Bitty Kinetics 2024</div>
              </div> */}
            </div>

            <div className="quick-links">
              <div className="quick-links-header"> Quick Links</div>
              <div className="links-section">
                <NavLink
                  to="/services"
                  className="links"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Service
                </NavLink>

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
