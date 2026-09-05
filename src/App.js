import React, { useState } from "react";
import "./App.css";

const PROJECTS = [
  {
    id: "shi",
    title: "Version Control System - Shi",
    category: "software-configuration-management",
    desc: "A simple version control system implemented in C++.",
    tech: ["C++", "Git", "CMake", "SSH"],
    github: "https://github.com/stovetop-z/Shi",
  },
  {
    id: "flight-dynamics",
    title: "Aerospace Flight Dynamics Sim",
    category: "systems",
    desc: "Real-time 6DoF flight dynamics executive simulator written in modern C++ utilizing quaternion rotations and Runge-Kutta numerical integration.",
    tech: ["C++20", "Linear Algebra", "Physics Simulation"],
    github: "https://github.com/stovetop-z/Aircraft_Simulation",
  },
  {
    id: "embedded-sql-db",
    title: "Java-based Embedded SQL Database for PizzaCo",
    category: "software-configuration-management",
    desc: "A lightweight, Java-based embedded SQL database for a mock company called PizzaCo that supports basic CRUD operations.",
    tech: ["Java", "SQL", "JDBC", "MySQL"],
    github: "https://github.com/stovetop-z/PizzaDB---CPSC-6620",
  },
  {
    id: "home-media-engine",
    title: "Full-Stack Media Engine",
    category: "systems",
    desc: "Lightweight, self-hosted media and gallery streaming platform featuring a low-latency Go REST service, MySQL relations, and a Vite-React interface.",
    tech: ["Go", "MySQL", "React"],
    github: "https://github.com/stovetop-z/Backend-CRUD-API",
  },
  {
    id: "deep-learning-from-scratch",
    title: "Deep Learning Projects",
    category: "machine-learning",
    desc: "In PyTorch, built from scratch deep learning models: linear classifiers, MLPs for image classification, CNNs for object detection and image segmentation.",
    tech: ["Python", "PyTorch", "torchvision", "NumPy", "Matplotlib"],
    github: "https://github.com/stovetop-z/Deep-Learning",
  },
  {
    id: "movie-recommendation-system",
    title: "Flindr - Movie Recommendation System",
    category: "machine-learning",
    desc: "A recommendation system for suggesting movies based on user preferences.",
    tech: ["Lua", "Python", "scikit-learn", "TCP/IP", "HTTP"],
    github: "https://github.com/stovetop-z/flindr",
  },
  {
    id: "cubesat-radio",
    title: "CubeSat Hamming Radio Pipeline",
    category: "embedded",
    desc: "Embedded telemetry encoding and packet validation firmware engineered in C for low Earth orbit nanosatellite communications payload.",
    tech: ["C", "Embedded Systems", "Packet Radio", "Hamming Code"],
    github: "https://github.com/stovetop-z/BYU-Cubesat",
  },
  {
    id: "sensitivity-analysis",
    title: "Sensitivity Analysis for Essential Tremor Model Parameters",
    category: "machine-learning",
    desc: "Sensitivity analysis of model parameters for essential tremor prediction.",
    tech: ["MATLAB", "Robotics ToolKit", "Simulink", "Matplotlib"],
    github: "https://github.com/stovetop-z/SensitivityAnalysis",
  },
];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [isLightMode, setIsLightMode] = useState(false);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className={isLightMode ? "app theme-light" : "app"}>
      <div className="bg-grid" />
      <div className="portfolio-container">
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="nav-left">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setIsLightMode((current) => !current)}
              aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              aria-pressed={isLightMode}
            >
              <span aria-hidden="true">{isLightMode ? "☾" : "☀"}</span>
              <span>{isLightMode ? "Dark" : "Light"}</span>
            </button>
            <div className="nav-brand">~/steven-w-zinn</div>
          </div>
          <nav className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="https://github.com/stovetop-z" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="terminal-badge">
            <span className="pulse-dot" />
            <span>Systems • Machine Learning • Computation • Biomechanics</span>
          </div>
          <h1 className="hero-title">
            Steven Zinn:{" "}
            <span className="gradient-text">Computer Scientist</span>.
          </h1>
          <p className="hero-description">
            Hi, I'm Steven. Master's in Computer Science student with a foundation
            in neuroscience and electrical engineering. Focused on high-performance
            systems, applied machine learning, and physical simulations.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              View Work ↓
            </a>
            <a
              href="https://github.com/stovetop-z"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub Profile ↗
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2 className="section-title">Featured Engineering</h2>
            <p className="section-subtitle">
              Selected builds across systems development, scientific modeling, and ML.
            </p>
          </div>

          <div className="filter-bar">
            {["all", "systems", "machine-learning", "embedded", "software-configuration-management"].map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category === "all"
                  ? "All Projects"
                  : category.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-top">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </div>
                <div>
                  <div className="project-tech">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Inspect Source ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Matrix */}
        <section id="skills" className="section">
          <div className="section-header">
            <h2 className="section-title">Technical Capabilities</h2>
            <p className="section-subtitle">
              Tools and languages used in production pipelines and systems.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3 className="skill-card-title">// Core Languages</h3>
              <ul className="skill-list">
                <li className="skill-item">C++</li>
                <li className="skill-item">Python</li>
                <li className="skill-item">Go</li>
                <li className="skill-item">Java</li>
                <li className="skill-item">C</li>
                <li className="skill-item">Lua</li>
                <li className="skill-item">SQL / JavaScript</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3 className="skill-card-title">// Machine Learning & Math</h3>
              <ul className="skill-list">
                <li className="skill-item">PyTorch, Torch Vision, Torch Geometric</li>
                <li className="skill-item">TensorFlow</li>
                <li className="skill-item">OpenCV & Computer Vision</li>
                <li className="skill-item">scikit-learn & SciPy</li>
                <li className="skill-item">Quaternion Rotations & Numerical Solvers</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3 className="skill-card-title">// Architecture & Infra</h3>
              <ul className="skill-list">
                <li className="skill-item">FastAPI / Flask / Go REST</li>
                <li className="skill-item">React & Vite</li>
                <li className="skill-item">Git & Github</li>
                <li className="skill-item">Tailscale & Cloudflare Tunnels</li>
                <li className="skill-item">Neovim (Lua configs)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div>Built with React & Clean CSS • Hosted on GitHub Pages</div>
          <div>© {new Date().getFullYear()} Steven Weller Zinn</div>
        </footer>
      </div>
    </div>
  );
}
