// src/components/Testimonials.jsx
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Ankit Sharma",
      role: "Team Lead at XYZ Corp",
      message: "Rohit consistently delivers high-quality code. His attention to detail and problem-solving skills are impressive."
    },
    {
      name: "Priya Verma",
      role: "Freelance Client",
      message: "He built a full-stack application for my startup and exceeded expectations in both timeline and functionality."
    },
    {
      name: "Mohit Raj",
      role: "Software Engineer, ABC Ltd.",
      message: "Working with Rohit on open-source projects has been a pleasure. He communicates well and writes clean code."
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="testimonial-card">
            <p className="message">“{feedback.message}”</p>
            <p className="author">— {feedback.name}, {feedback.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
