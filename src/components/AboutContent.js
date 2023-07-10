import "./AboutContent.css";
import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/React1.png";
import React2 from "../assets/React2.jpg";
import React3 from "../assets/React3.JPG";
import React4 from "../assets/React4.jpg";
import React6 from "../assets/React6.png";
import React7 from "../assets/B4.JPG";
import React11 from "../assets/React11.jpg";
import CV from "../assets/CV.pdf";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>I am Ishvini Anuraj, currently an undergraduate at University of Moratuwa,Srilanka. I have very much interested in Front-End web development. I'm just a regualar girl who wants to share my experience and how to resolve problems I've face. </p>
                <p>I have 1 year experience as an Intern in Commercial Bank of Ceylon PLC(Jan 2020-March 2021)</p>
                <img src={React6} className="img" alt="true" />
                <img src={React7} className="img" alt="true" /><br />

                <a href={CV} download>
                    <button className="btn">Download CV</button>
                </a>

                <br></br>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>


            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React11} className="img" alt="true" />
                    </div>

                    <div className="img-stack bottom">
                        <img src={React4} className="img" alt="true" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutContent