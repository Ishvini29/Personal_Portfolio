import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/bg.jpg"
import { Link } from "react-router-dom";
import Glasses from "../assets/glassesimoji.png";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">

        <div className="ani">
          <marquee behavior="alternate" direction="left">
            <img className="car" src={Glasses} alt="IntroImg" />
          </marquee>

        </div>
        <p>HI,I'M AN UNDERGRADUATE.</p>
        <h1>ISHVINI ANURAJ</h1>
        <div>

          <Link to="/education" className="btn">Education</Link>
          <Link to="/project" className="btn btn-light">Project</Link>

        </div>
      </div>
    </div>
  )
}

export default HeroImg