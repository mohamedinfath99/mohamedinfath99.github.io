import React from "react";
import "./Intro.css";
import { IconButton } from '@material-ui/core'
import { Facebook, LinkedIn, Instagram, GitHub } from "@material-ui/icons"
import Vector2 from "../../img/code.gif";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const Intro = () => {

  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Intro" id="Intro">

      <div className="i-left">
        <div className="i-name">

          <span >Hy! I Am</span>
          <span>Rafeek Mohamed Infath</span>

          <span className="name">
            A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
          </span>

        </div>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>

        <div className="i-icons">

          <a href='https://www.facebook.com/mohamedinfath99' target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>

          <a href='https://www.linkedin.com/in/mohamedinfath99' target="_blank" rel="noopener noreferrer">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>

          <a href='https://github.com/mohamedInfath99' target="_blank" rel="noopener noreferrer">
            <IconButton>
              <GitHub />
            </IconButton>
          </a>

        </div>

      </div>


      <div className="i-right">

        <img src={Vector2} alt="" />


        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>


        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >

          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
