// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">HTML</div>
        <div className="skill-card">CSS</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Node.js</div>
        <div className="skill-card">Express</div>
        <div className="skill-card">MongoDB</div>
        <div className="skill-card">MySQL</div>
        <div className="skill-card">Git & GitHub</div>
        <div className="skill-card">Postman</div>
        <div className="skill-card">Firebase</div>
        <div className="skill-card">Tailwind CSS</div>
      </div>
    </section>
  );
};

export default Skills;
