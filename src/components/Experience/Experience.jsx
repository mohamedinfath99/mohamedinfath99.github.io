import React from "react";
import "./Experience.css";



const Experience = () => {
  return (
    <div className="experience" id='experience'>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}>6+</div>
        <span style={{ color: "#FCA61F" }}>months </span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}>3</div>
        <span style={{ color: "#FCA61F" }}>completed </span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}>1</div>
        <span style={{ color: "#FCA61F" }}>companies </span>
        <span>Work</span>
      </div>

    </div>
  );
};

export default Experience;
