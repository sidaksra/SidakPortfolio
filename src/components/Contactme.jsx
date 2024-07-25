import React from 'react'
import { Link } from "react-router-dom";
const Contactme = () => {
    const emailAddress = 'sidaksinghsra@outlook.com'; 
    const emailLink = `Email: ${emailAddress}`;

  return (
    <section id="contact-me-section" className="contact-first-section">
            {/* <!-- First Section --> */}
            <div className="left-section">
                <div className="get-in-section">
                    <div>
                        <p className='get-in-text'>GET IN</p>  
                    </div>
                    <div className="image-and-line">
                        <div className="profile-image-container">
                            <img  src={require("../images/myimage.jpg")} alt="Sidak Pic" className="hover-blur" />
                            
                        </div> 
                        <p className='touch-text'>TOUCH</p>   
                    </div>
                    <div className="email-div">
                        <p className="underlineHoverEffect-2"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sidaksinghsra@outlook.com" target="_blank">{emailLink}</a></p>
                    </div>
                </div>
            </div>
            
            <div className="right-section">
                <div className="social-links">
                    <h1>SOCIAL LINKS </h1>
                    <a href="https://linkedin.com/in/sidaksinghsra/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin"></i> LinkedIn Profile</a>
                    <a href="https://github.com/sidaksra" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub Profile</a>
                </div>
                <div className="my-ending-line">
                    <p>"I'm now seeking opportunities to apply my diverse skill set and share my knowledge and experience with forward-thinking IT organizations. Let's connect and explore how we can collaborate to make a real impact together!</p>
                    <div>
                        <h2>Fun Fact about me </h2>
                        <p>I'm not just a music lover; I'm also a dance maestro who's taken home numerous prizes in dance competitions and can bust out Bhangra moves on any song! 🕺🎶</p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Contactme
