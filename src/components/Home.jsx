// src/components/Home.jsx
import React from "react";
import "./Home.css";
import Rohit from '../assets/Rohit.png'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm Rohit Kumar</h1>
          <p>Full Stack Developer | MERN Stack Enthusiast</p>
          <a href="#projects" className="home-button">View My Work</a>
        </div>
        <div className="home-image">
          <img src={Rohit} alt="Rohit Kumar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
