import "./projects.css";
import React from 'react';
import { FaLink } from 'react-icons/fa';


const projects = () => {
    return (
        <div className="pricing1">
            <div className="card-container1">
                <div className="card1">
                    <h3>Anti-sleep alarm with alcohol and flame detection</h3>
                    <span className="bar"></span>
                    <p className="phara">IOT</p>
                    <a href="https://drive.google.com/drive/folders/1_Bx92JcXKBHzvMH86AC4x8Ao1uR4C90q?usp=sharing"><FaLink className="link-icon" style={{ color: "black" }} /></a>
                </div>

                <div className="card1">
                    <h3>New Employee Training System</h3>
                    <span className="bar"></span>
                    <p className="phara">WEB APP</p>
                    <a href="https://docs.google.com/document/d/1B5fzyVi-D0riVZqm6wC3gJ4T0OBXxvO1JyW0qJQQTxM/edit?usp=sharing"><FaLink className="link-icon" style={{ color: "black" }} /></a>
                </div>

                <div className="card1">
                    <h3>Website for Ruhlins(Pvt)Ltd</h3>
                    <span className="bar"></span>
                    <p className="phara">WEB SITE</p>
                    <a href="https://ruhlins.netlify.app/"><FaLink className="link-icon" style={{ color: "black" }} /></a>
                </div>

                <div className="card1">
                    <h3>Ecommerce Website</h3>
                    <span className="bar"></span>
                    <p className="phara">WEB SITE</p>
                    <a href="https://ishvini29.github.io/store_website/"><FaLink className="link-icon" style={{ color: "black" }} /></a>
                </div>

                <div className="card1">
                    <h3>Contact Manager</h3>
                    <span className="bar"></span>
                    <p className="phara">WEB APP</p>
                    <a href="https://contact-manager-system.netlify.app/"><FaLink className="link-icon" style={{ color: "black" }} /></a>
                </div>
            </div>
        </div>
    )
}

export default projects



// import "./projects.css";
// import React, { useState } from 'react';
// import { FaLink } from 'react-icons/fa';

// const Projects = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalText, setModalText] = useState("");

//     const handleLinkClick = (text, modalText) => {
//         setModalText(modalText);
//         setIsModalOpen(true);
//     }

//     const closeModal = () => {
//         setIsModalOpen(false);
//     }

//     return (
//         <div className="pricing1">
//             <div className="card-container1">
//                 <div className="card1">
//                     <h3>Anti-sleep alarm with alcohol and flame detection</h3>
//                     <span className="bar"></span>
//                     <p className="phara">IOT</p>
//                     <FaLink className="link-icon" onClick={() => handleLinkClick("Modal Text 1", "Project information")} />
//                 </div>

//                 <div className="card1">
//                     <h3>New Employee Training System</h3>
//                     <span className="bar"></span>
//                     <p className="phara">WEB APP</p>
//                     <FaLink className="link-icon" onClick={() => handleLinkClick("Modal Text 2", "This is the modal text for project 2")} />
//                 </div>

//                 <div className="card1">
//                     <h3>Website for Ruhlins(Pvt)Ltd</h3>
//                     <span className="bar"></span>
//                     <p className="phara">WEB SITE</p>
//                     <FaLink className="link-icon" onClick={() => handleLinkClick("Modal Text 3", "This is the modal text for project 3")} />
//                 </div>

//                 <div className="card1">
//                     <h3>Ecommerce Website</h3>
//                     <span className="bar"></span>
//                     <p className="phara">WEB SITE</p>
//                     <FaLink className="link-icon" onClick={() => handleLinkClick("Modal Text 4", "This is the modal text for project 4")} />
//                 </div>
//             </div>

//             {isModalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={closeModal}>&times;</span>
//                         <p>{modalText}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Projects;
