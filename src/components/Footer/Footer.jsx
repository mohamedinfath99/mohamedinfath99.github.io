import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { IconButton } from '@material-ui/core'
import { Facebook, LinkedIn, GitHub } from "@material-ui/icons"



const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>mohamedinfath99@gmail.com</span> */}
        <div className="f-icons">
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
    </div>
  );
};

export default Footer;
