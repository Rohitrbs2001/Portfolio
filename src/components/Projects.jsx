// src/components/Projects.jsx
import React, { useEffect, useState } from "react";
import "./Projects.css";

const GITHUB_USERNAME = "Rohitrbs2001"; // ← replace
const SELECTED_REPOS = [
  "Weather_App_Using_Reactjs",
  "Quiz-app",
  "ReactActivity",
  "portfolio-react",
]; // ← your exact repo names

const Projects = () => {
  const [allRepos, setAllRepos] = useState([]);
  const [mode, setMode] = useState("recent"); // "recent" | "selected"

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        const nonForks = data.filter(r => !r.fork);
        const sorted = [...nonForks].sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setAllRepos(sorted);
        // console.log(allRepos); 
      })
      .catch(console.error);
  }, []);

  // Compute lists
  const topSix = allRepos.slice(0, 6);
  console.log(topSix);
  const selected = SELECTED_REPOS
    .map(name => allRepos.find(r => r.name === name))
    .filter(Boolean);

  // Decide what to render
  const reposToShow = mode === "recent" ? topSix : selected;

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-toggle">
        <button
          className={mode === "recent" ? "active" : ""}
          onClick={() => setMode("recent")}
        >
          Top 6
        </button>
        <button
          className={mode === "selected" ? "active" : ""}
          onClick={() => setMode("selected")}
        >
          Selected
        </button>
      </div>

      <div className="projects-grid">
        {reposToShow.map(repo => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available."}</p>
            <div className="project-links">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
