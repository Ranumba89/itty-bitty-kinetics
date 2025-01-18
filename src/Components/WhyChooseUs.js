import React from "react";
import "./css/WhyChooseUs.css";
import backgroundImage from "../Images/7146445 1.png";
import family from "../Images/Family.png";
import sunrise from "../Images/Sunrise.png";
import customerExperience from "../Images/Customer Experience.png";
import homeTherapy from "../Images/Door Handle.png";
import treatmentPlan from "../Images/Phone.png";
import holisticApproach from "../Images/Dartboard.png";
import provenResults from "../Images/Result.png";
const WhyChooseUs = () => {
  return (
    <div
      className="why-choose-us-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="why-choose-us-header">
        <h2>Why Choose Us?</h2>
        <p>
          At Itty Bitty Kinetics Therapy Group Inc., we are committed to
          providing high-quality, family-centered care that supports your
          child’s development. Our Early Start Program offers Occupational,
          Physical, and Speech Therapy to help children develop essential skills
          for greater independence, self-regulation, and success. We collaborate
          closely with families to ensure therapy is integrated into everyday
          routines, empowering both children and caregivers.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      <div className="why-trust-us">
        <h3 className="trust-us-header">Here's why families trust us</h3>
        <div className="trust-cards">
          {/* Row 1 */}
          <div className="trust-card">
            <img src={family} alt="Family" className="trust-card-icon" />
            <h4>Family-Centered Care</h4>
            <p>
              We believe in partnering with families to ensure that therapy is
              not just about the child’s progress, but also about empowering
              parents and caregivers. We take the time to understand your
              family’s unique needs and integrate therapy into your child’s
              everyday routines for the best possible outcomes.
            </p>
          </div>
          <div className="trust-card">
            <img src={sunrise} alt="Sunrise" className="trust-card-icon" />
            <h4>Early Start Program</h4>
            <p>
              Our Early Start Pediatric Program focuses on giving children the
              best possible start in life. Whether your child needs
              Occupational, Physical, or Speech Therapy, we offer early
              intervention services that help children develop essential skills
              for greater independence, communication, motor coordination, and
              social interactions.
            </p>
          </div>
          <div className="trust-card">
            <img
              src={customerExperience}
              alt="Customer Experience"
              className="trust-card-icon"
            />
            <h4>Experienced and Compassionate Therapists</h4>
            <p>
              Our team consists of highly trained professionals who are
              passionate about helping children thrive. We use evidence-based
              practices tailored to each child’s unique challenges, providing
              therapeutic interventions that promote growth in a safe,
              supportive environment.
            </p>
          </div>
          </div>
          {/* Row 2 */}
          <div className="trust-cards">
          <div className="trust-card">
            <img
              src={homeTherapy}
              alt="Home Therapy"
              className="trust-card-icon"
            />
            <h4>Home and Clinic-Based Therapy</h4>
            <p>
              We offer flexible therapy options—both in-home and at our
              state-of-the-art clinic. By offering therapy in the comfort of
              your home, we can assess and support your child in their natural
              environment.
            </p>
          </div>
          <div className="trust-card">
            <img
              src={treatmentPlan}
              alt="Treatment Plan"
              className="trust-card-icon"
            />
            <h4>Customized Treatment Plans</h4>
            <p>
              Every child is different. We create individualized therapy plans
              tailored to your child’s needs and goals, ensuring a personalized
              approach to help them succeed at their own pace.
            </p>
          </div>
          <div className="trust-card">
            <img
              src={holisticApproach}
              alt="Holistic Approach"
              className="trust-card-icon"
            />
            <h4>Holistic Approach to Development</h4>
            <p>
              We focus on enhancing your child’s overall development, including
              self-regulation, play skills, independence, and success in
              everyday tasks. We take a whole-child approach to ensure both
              immediate and long-term growth.
            </p>
          </div>
          </div>
          {/* Row 3 */}
          <div className="trust-cards">

          <div className="trust-card">
            <img
              src={provenResults}
              alt="Proven Results"
              className="trust-card-icon"
            />
            <h4>Proven Results and Family Satisfaction</h4>
            <p>
              Our approach is grounded in evidence-based practices, ensuring
              your child receives the highest standard of care. We are committed
              to measurable outcomes that improve your child’s quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
