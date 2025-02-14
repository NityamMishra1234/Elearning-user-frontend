import React from "react";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import contactAnimation from "../../svg/ContectAnimation.json"; // Add your Lottie file here
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>Let’s Connect! <span className="wave">👋</span></h1>
        <p>Feel free to reach out via any of the platforms below!</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          {/* LinkedIn */}
          <div className="contact-card">
            <FaLinkedin className="icon linkedin" />
            <a href="https://www.linkedin.com/in/nityam-mishra-043295290" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-card">
            <FaGithub className="icon github" />
            <a href="https://github.com/NityamMishra1234" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          {/* Portfolio */}
          <div className="contact-card">
            <FaGlobe className="icon portfolio" />
            <a href="https://myapp-smoky-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </div>

          {/* Email */}
          <div className="contact-card">
            <FaEnvelope className="icon email" />
            <span>nityammishra181@gmail.com</span>
          </div>

          {/* Phone Number */}
          <div className="contact-card">
            <FaPhoneAlt className="icon phone" />
            <span>+91 9905805143</span>
          </div>

          {/* Address */}
          <div className="contact-card">
            <FaMapMarkerAlt className="icon address" />
            <span>LotusGreen boys pg Greater Noida </span>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="contact-animation">
          <Lottie animationData={contactAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
