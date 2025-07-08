// src/components/Experience.jsx
import React from "react";
import "./Experience.css";

const Experience = () => {
  const timeline = [
    {
      year: "2025",
      title: "Full Stack Developer Intern",
      company: "TechSpark Pvt Ltd",
      description: "Worked on developing REST APIs and building interactive UI using React and Node.js."
    },
    {
      year: "2024",
      title: "MERN Stack Project",
      company: "Freelance",
      description: "Built a house rental management platform with authentication, dashboards, and MongoDB backend."
    },
    {
      year: "2023",
      title: "Web Development Intern",
      company: "CodeStudio",
      description: "Assisted in building mobile-responsive websites and implemented SEO best practices."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {timeline.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title} @ {item.company}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
