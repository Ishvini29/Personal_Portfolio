import "./Educ.css";
import React from 'react';
import IntroImg from "../assets/3.png"
import BImg from "../assets/4.png"
import VImg from "../assets/5.png"
import SImg from "../assets/6.png"
import DImg from "../assets/7.png"
const Educ = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card" style={{ borderRadius: "15px", boxShadow: "0px 0px 5px 2px rgba(192,185,194, 0.5)" }} >
                    <h3>University of Moratuwa</h3>
                    <span className="bar"></span>
                    <img className="uom-img" src={IntroImg} alt="uom" /><br />
                    <p>Studying Bsc. (Hons) in Information Technology & Management.</p>
                </div>

                <div className="card" style={{ borderRadius: "15px", boxShadow: "0px 0px 5px 2px rgba(192,185,194, 0.5)" }}>
                    <h3>British Way Enlish Acadamy</h3>
                    <span className="bar"></span>
                    <img className="BW-img" src={BImg} alt="BWEA" /><br />
                    <p>Finished Diploma of English(2019).</p>
                </div>

                <div className="card" style={{ borderRadius: "15px", boxShadow: "0px 0px 5px 2px rgba(192,185,194, 0.5)" }}>
                    <h3>J/Vembadi Girls' High School</h3>
                    <span className="bar"></span>
                    <img className="V-img" src={VImg} alt="VGHS" /><br />
                    <p>Studied upto GCE Advance Level(2011-2019).</p>
                </div>

                <div className="card" style={{ borderRadius: "15px", boxShadow: "0px 0px 5px 2px rgba(192,185,194, 0.5)" }}>
                    <h3>DMI Computer Education</h3>
                    <span className="bar"></span>
                    <img className="D-img" src={DImg} alt="DMI" /><br />
                    <p>Finished Diploma of Accounting-Tally9.0 & Office Automation(2016).</p>
                </div>

                <div className="card" style={{ borderRadius: "15px", boxShadow: "0px 0px 5px 2px rgba(192,185,194, 0.5)" }}>
                    <h3>St.John Bosco's Vidyalayam</h3>
                    <span className="bar"></span>
                    <img className="St-img" src={SImg} alt="Bosco" /><br />
                    <p>Studied upto Grade 5(2005-2010).</p>
                </div>



            </div>
        </div >
    )
}

export default Educ