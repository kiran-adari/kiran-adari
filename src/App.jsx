import React, { useEffect, useState } from "react";
import "./styles.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const experiences = [
  {
    role: "AI Full Stack Intern",
    company: "Rutgers University",
    period: "June 2025 – August 2025",
    points: [
      "Developed a real-time AI pipeline processing 500K+ events per day.",
      "Achieved under 200ms latency with 99% uptime.",
      "Worked on scalable, high-throughput application architecture for real-time systems.",
    ],
  },
  {
    role: "Software Developer",
    company: "Hopkins Software",
    period: "Dec 2023 – Dec 2024",
    points: [
      "Built scalable IoT and AI-driven applications.",
      "Worked with FastAPI, React, and MongoDB for full-stack delivery.",
      "Contributed to practical, production-oriented software systems.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Aptean",
    period: "Aug 2022 – Dec 2023",
    points: [
      "Built REST APIs enabling seamless multi-service data flow.",
      "Improved backend performance by 25% through codebase and workflow optimization.",
      "Worked on production-grade web applications and scalable backend systems.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Aptean",
    period: "Jan 2022 – Jul 2022",
    points: [
      "Debugged production issues and improved application stability.",
      "Gained hands-on experience in enterprise software development.",
    ],
  },
];

const projects = [
  {
    title: "Real-Time AI Video Analytics System",
    desc: "Built a real-time object detection and tracking system for intelligent video analytics with a scalable streaming architecture.",
    details: [
      "Pipeline: RTMP Stream → MMDetection → Deep SORT → Kafka → Analytics",
      "Designed for real-time processing and scalable event flow",
      "Combined AI models with backend integration for production-style analytics",
    ],
  },
  {
    title: "Movie Recommender System",
    desc: "Built a personalized recommendation system with an interactive full-stack experience.",
    details: [
      "Created recommendation logic for personalized movie suggestions",
      "Designed backend APIs to serve recommendations",
      "Integrated frontend for a smooth and interactive user experience",
    ],
  },
];

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "C",
  "C#",
  "Spring Boot",
  "FastAPI",
  "React",
  "Django",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "VS Code",
  "IntelliJ",
  "PyCharm",
  "Data Structures",
  "Algorithms",
  "System Design",
  "OOP",
  "REST APIs",
];

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const marker = window.scrollY + window.innerHeight / 2;
      const fullHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (window.scrollY + windowHeight >= fullHeight - 50) {
        setActive("contact");
        return;
      }

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (marker >= top && marker < bottom) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const navbarOffset = 120;

    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <header className="topbar">
        <div className="brand">KA</div>

        <nav className="glass-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${active === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          className="resume-btn"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-left">
            <p className="hero-tag">
              Full-Stack Engineer • MS CS (AI Focus) • Real-Time Systems • AI-Integrated Apps
            </p>

            <h1>
              Full-Stack Engineer building scalable
              <span> AI-integrated applications</span>
            </h1>

            <p className="hero-text">
              I’m a Master’s in Computer Science student at Rutgers University with a focus on AI.
              I build scalable web applications and intelligent systems using FastAPI, Spring Boot,
              React, and MongoDB, with hands-on experience in real-time pipelines, backend
              optimization, and production-ready application development.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollToSection("projects")}>
                View Projects
              </button>
              <button className="secondary-btn" onClick={() => scrollToSection("contact")}>
                Let’s Connect
              </button>
            </div>

            <div className="skills-wrap hero-metrics">
              <span className="skill-chip">500K+ events/day</span>
              <span className="skill-chip">&lt;200ms latency</span>
              <span className="skill-chip">99% uptime</span>
              <span className="skill-chip">+25% performance improvement</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-shine"></div>
            <h3>Kiran Adari</h3>
            <p className="mini-title">Profile Snapshot</p>

            <div className="info-box">MS Computer Science — AI Focus, Rutgers University</div>
            <div className="info-box">Full-Stack Engineer with real-world product experience</div>
            <div className="info-box">Built real-time AI systems with high throughput</div>
            <div className="info-box">Strong in DSA, System Design, OOP, and REST APIs</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head">
            <p>About</p>
            <h2>Software engineering depth with growing AI specialization</h2>
          </div>

          <div className="about-grid">
            <div className="glass-card">
              <h3>Who I Am</h3>
              <p>
                I am a full-stack engineer currently pursuing a Master’s in Computer Science with
                a focus on AI at Rutgers University. My work sits at the intersection of software
                engineering, scalable systems, and intelligent applications.
              </p>
            </div>

            <div className="glass-card">
              <h3>What I Build</h3>
              <p>
                I build modern web applications, backend systems, real-time processing pipelines,
                and AI-integrated products using technologies like FastAPI, Spring Boot, React,
                MongoDB, PostgreSQL, and MySQL.
              </p>
            </div>

            <div className="glass-card">
              <h3>What I Bring</h3>
              <p>
                I bring a combination of hands-on development experience, strong software
                fundamentals, and a practical engineering mindset shaped by production work,
                performance optimization, and system design.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <p>Experience</p>
            <h2>Professional experience across AI, IoT, and full-stack systems</h2>
          </div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div className="project-card" key={index}>
                <div className="project-top-line"></div>
                <h3>{exp.role}</h3>
                <h4 className="exp-company">
                  {exp.company} <span>• {exp.period}</span>
                </h4>
                <ul className="exp-points">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <p>Projects</p>
            <h2>Projects that show scalable engineering and AI integration</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-top-line"></div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <ul className="exp-points">
                  {project.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <p>Skills</p>
            <h2>Technologies, tools, and core engineering concepts</h2>
          </div>

          <div className="skills-wrap">
            {skills.map((skill, index) => (
              <span className="skill-chip" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <p>Contact</p>
            <h2>Let’s build scalable, intelligent, and premium digital products</h2>
            <p className="contact-text">
              I’m interested in software engineering, AI-integrated applications, full-stack
              development, and opportunities where strong engineering and product thinking matter.
            </p>

            <div className="contact-list">
              <div>Email: ka988@scarletmail.rutgers.edu</div>
              <div>Phone: +1 (732)-558-7847</div>
              <div>Location: New Brunswick, NJ, USA</div>
              <div>
                   LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/adarikiran/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                    kiran-adari
                    </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}