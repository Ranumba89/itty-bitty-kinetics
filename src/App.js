import { useState } from "react";
import "./App.css";
import AreasOfSpecialty from "./Components/AreasOfSpecialty";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroductionSection from "./Components/IntroductionSection";
import OurHappyCustomers from "./Components/OurHappyCustomers";
import ServicesComponents from "./Components/ServicesComponents/ServicesComponents";
import WeDo from "./Components/WeDo";
import WelcomeItty from "./Components/WelcomeItty";
import WhyChooseUs from "./Components/WhyChooseUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ServicesPage from "./Components/ServicesComponents/ServicesPage";
import ScrollToTop from "./ScrollToTop";
import WeAreHere from "./Components/ServicesComponents/WeAreHere";
import AboutUs from "./Components/AboutUs";
import SpeechTherapy from "./Components/ServicesComponents/SpeechTherapy";
import PhysicalTherapy from "./Components/ServicesComponents/PhysicalTherapy";
import OccupationalTherapy from "./Components/ServicesComponents/OccupationalTherapy";
import EyeCoordinationGame from "./EyeCoordinationGame";
import RunningKids from "./RunningKids";
import Programs from "./Components/ProgramsComponents/Programs";
import ConsultationPage from "./Components/ConsultationPage";
import FeedingTherapy from "./Components/ServicesComponents/FeedingTherapy";

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              <IntroductionSection />
              <div className="padding-container">
                <WelcomeItty />
                <WeDo />
              </div>
              <WhyChooseUs />
              <AreasOfSpecialty />
              {/* <OurHappyCustomers /> */}
              {/* <EyeCoordinationGame/> */}
            </div>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/speech-therapy" element={<SpeechTherapy />} />
        <Route path="/physical-therapy" element={<PhysicalTherapy />} />
        <Route path="/occupational-therapy" element={<OccupationalTherapy />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/feeding-therapy" element={<FeedingTherapy />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
