// src/components/Resume.jsx
import React from "react";
import Resume1 from "../assets/Resume.pdf";
import "./Resume.css"

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p>Click the button below to view or download my resume.</p>
      <a
        href={Resume1}
        download
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </section>
  );
};

export default Resume;
