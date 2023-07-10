import "./FooterStyles.css";
import React from 'react';

import { FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
// import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+94773550903</h4>
          </div>

          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />ishvinia@gmail.com</h4>

          </div>

        </div>
        {/* <img className="logo" src={Logo} alt="Logo"/> */}

        <div className="right">
          <h4>About Me</h4>
          <p>This is me Ishvini Anuraj.Undergraduate from the IT Faculty of the University of Moratuwa, Sri Lanka.<br />To me technology used wisely is a catalyst to magically transforming the way we live.</p>
          <div className="social">
            <a href="https://www.facebook.com/anu.anuraj.71" target="_blank"><FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
            <a href="https://www.linkedin.com/in/ishvini-anuraj-b51180207" target="_blank"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
            <a href="https://github.com/Ishvini29" target="_blank"><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
            <a href="https://medium.com/@ishvini2000" target="_blank"><FaMedium size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer