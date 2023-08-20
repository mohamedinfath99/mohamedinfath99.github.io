import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";


const navbar = () => {
  return (

    <div className="n-wrapper" id="Home">

      <div className="n-left">
        <div className="n-name">- FULL STACK DEVELOPER 🧑‍💻 -</div>
      </div>


      <div className="n-right">
        <div className="n-list">

          <ul style={{ listStyleType: "none" }}>

            <li>
              <Link activeClass="active" to="Home" spy={true} smooth={true} hashSpy={true}>
                HOME
              </Link>
            </li>

            <li>
              <Link to="Skill" spy={true} smooth={true} hashSpy={true}>
                SKILL
              </Link>
            </li>

            <li>
              <Link to="Experience" spy={true} smooth={true} hashSpy={true}>
                EXPERIENCE
              </Link>
            </li>

            <li>
              <Link to="Education" spy={true} smooth={true} hashSpy={true}>
                EDUCATION
              </Link>
            </li>

            <li>
              <Link to="Project" spy={true} smooth={true} hashSpy={true}>
                PROJECTS
              </Link>
            </li>

            <li>
              <Link to="Contact" spy={true} smooth={true} hashSpy={true}>
                CONTACT
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default navbar;
