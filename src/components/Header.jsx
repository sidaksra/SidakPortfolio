import React from 'react'
import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header>
        <nav>
            <div className="name-tag"><HashLink to={"/#home"} className="underlineHoverEffect">Sidak Portfolio</HashLink></div>
            <div className="navigation-right">
                <ul>
                    <li><HashLink to={"/#Education"} className="underlineHoverEffect">Education</HashLink></li>
                    <li><HashLink to={"/#skills"} className="underlineHoverEffect">Skills</HashLink></li>
                    <li><Link to={"/projects"} className="underlineHoverEffect">Projects</Link></li>
                    <li><HashLink to={"/#contact-me-section"} className="underlineHoverEffect">Contact Me</HashLink></li>
                </ul>
            </div>
        </nav>
    </header>
      
    </>
  )
}

export default Header
