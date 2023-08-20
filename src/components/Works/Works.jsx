import React from "react";
import "./Works.css";
import { Link } from 'react-scroll'
import Experience from "../Experience/Experience";


const Works = () => {
  return (
    <div className="works" id="works">

      <div className="w-left">
        <div className="awesome">

          <span>
            My Working
          </span>

          <span>Experience</span>

          <span><h4>“When I think about what part of my college experience came back in my <br />work experience, I feel like it was learning  how to read deeper, learning  <br />how to keep filling the movie up with more and more resonance.” <br /> <br /> - Jodie Foster - </h4></span>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>


      </div>
      <div className="w-right">
        <Experience />
      </div>
    </div>
  );
};

export default Works;
