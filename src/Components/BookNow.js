import { IoPlaySharp } from "react-icons/io5";
import "./css/BookNow.css";
import React from "react";
import Star from "./Star";
import { useMediaQuery } from "@mantine/hooks";

const BookNow = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {" "}
      {isMobile ? (
        <div className="book-now-container">
          <div className="book-now-header">Book a Free Consultation</div>
          <div className="book-now-content">
            Would like to have a calendar set up with acuity or calenderly etc.
            to have clients book a consultation on their own. They would create
            a log in with their information and sign up for the consultation.
          </div>
          <div className="book-now-btn">
              Book free consultation now
              <IoPlaySharp
                style={{
                  marginTop: 1,
                }}
              />
            </div>
        </div>
      ) : (
        <div>
          <div className="book-now-container">
            <Star color={"white"} top={100} left={300} />
            <Star color={"white"} top={40} right={400} size={50} />

            <div className="book-now-header">Book a Free Consultation</div>
            <div className="book-now-content">
              Would like to have a calendar set up with acuity or calenderly
              etc. to have clients book a consultation on their own. They would
              create a log in with their information and sign up for the
              consultation.
            </div>
            <div className="book-now-btn">
              Book free consultation now
              <IoPlaySharp
                style={{
                  marginTop: 1,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNow;
