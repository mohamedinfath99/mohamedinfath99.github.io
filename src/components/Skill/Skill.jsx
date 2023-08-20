import React, { useContext } from "react";
import "./skill.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion';
import inf99 from './inf99.pdf';

const Skill = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Skill">

      <div className="awesome">

        <span style={{ color: darkMode ? "white" : "" }}>Awesome</span>
        <span>skills</span>
        <span>
          “First, solve the problem. Then, write the code.”
          <br />
          - John Johnson -
        </span>
        <a href={inf99} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">

        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={"React Js,Next JS, React Hook, Redux,React Router, Axios ,Tailwind CSS, Styled Components, Material-UI, Ant Design, Bootstrap, Prettier,ESLint "}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={"Node.js, Express JS, Rest API, Rest API, JWT, Passport.js"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Database"}
            detail={
              "MongoDB, MySQL, MongoDB Compass, Mongoose, "
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <motion.div
          initial={{ left: "10rem", top: "10rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Cloud Service"}
            detail={"Amazon Web Services (AWS),Firebase, Heroku, Google Cloud Platform"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;

