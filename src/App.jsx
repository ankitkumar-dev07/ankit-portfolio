import { useEffect, useState } from "react";
import "./App.css";

const GITHUB_URL = "https://github.com/ankitkumar-dev07";
const LINKEDIN_URL = "https://www.linkedin.com/in/ankitkumar-da/";
const EMAIL = "ak7543796@gmail.com";

const projects = [
  {
    number: "01",
    category: "AI / FULL STACK",
    status: "COMPLETED",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis platform that evaluates resumes, extracts important information, provides ATS-focused insights, and helps users improve their job applications.",
    tags: ["React", "Node.js", "Express", "AI", "MongoDB"],
    github: "https://github.com/ankitkumar-dev07/career-lens-ai",
  },
  {
    number: "02",
    category: "FULL STACK",
    status: "COMPLETED",
    title: "Smart Expense Tracker",
    description:
      "A full-stack personal finance application designed to help users track expenses, organize transactions, monitor spending patterns, and understand their financial activity.",
    tags: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/ankitkumar-dev07/smart-expense-tracker",
  },
  {
    number: "03",
    category: "MERN / FULL STACK",
    status: "COMPLETED",
    title: "NovaCart",
    description:
      "A modern MERN stack e-commerce application featuring product browsing, authentication, cart management, REST APIs, and a scalable full-stack architecture.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ankitkumar-dev07/novacart-mern-ecommerce",
  },
];

const skills = [
  {
    icon: "⚛",
    title: "React",
    level: "Advanced",
  },
  {
    icon: "JS",
    title: "JavaScript",
    level: "Advanced",
  },
  {
    icon: "◆",
    title: "Node.js",
    level: "Intermediate",
  },
  {
    icon: "EX",
    title: "Express.js",
    level: "Intermediate",
  },
  {
    icon: "M",
    title: "MongoDB",
    level: "Intermediate",
  },
  {
    icon: "<>",
    title: "HTML & CSS",
    level: "Advanced",
  },
  {
    icon: "⌘",
    title: "Git & GitHub",
    level: "Intermediate",
  },
  {
    icon: "↗",
    title: "REST APIs",
    level: "Intermediate",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio" id="top">
      <div className="noise" />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="navbar">
        <div className="nav-inner">
          <a href="#top" className="brand" onClick={closeMenu}>
            <span className="brand-mark">&lt;/&gt;</span>

            <span>
              Ankit<span className="brand-dot">.</span>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            className="nav-github"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero-section" id="home">
          <div className="hero-grid" />

          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              Available for internship opportunities
            </div>

            <p className="hero-eyebrow">
              <span>01</span>
              FULL STACK DEVELOPER
            </p>

            <h1>
              Building digital
              <br />
              <span className="gradient-text">experiences</span> that
              <br />
              matter.
            </h1>

            <p className="hero-description">
              Hi, I’m <strong>Ankit Kumar</strong> — a developer focused on
              building modern web applications, solving real-world problems,
              and turning ideas into polished digital products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work
                <span>↗</span>
              </a>

              <a href="#contact" className="button button-secondary">
                Let's connect
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">BASED IN</span>
                <span>India</span>
              </div>

              <div>
                <span className="meta-label">FOCUS</span>
                <span>MERN / AI</span>
              </div>

              <div>
                <span className="meta-label">STATUS</span>
                <span>Open to work</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              HERO VISUAL
          ====================================================== */}

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="developer-card">
              <div className="card-top">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />

                <span className="terminal-title">
                  developer.jsx
                </span>
              </div>

              <div className="code-content">
                <div>
                  <span className="code-number">01</span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span>{" "}
                  <span className="code-white">=</span>{" "}
                  <span className="code-white">&#123;</span>
                </div>

                <div>
                  <span className="code-number">02</span>
                  <span className="code-key">name:</span>{" "}
                  <span className="code-green">
                    &quot;Ankit Kumar&quot;
                  </span>
                  <span className="code-white">,</span>
                </div>

                <div>
                  <span className="code-number">03</span>
                  <span className="code-key">role:</span>{" "}
                  <span className="code-green">
                    &quot;Full Stack Developer&quot;
                  </span>
                  <span className="code-white">,</span>
                </div>

                <div>
                  <span className="code-number">04</span>
                  <span className="code-key">stack:</span>{" "}
                  <span className="code-white">[</span>
                </div>

                <div className="code-indent">
                  <span className="code-green">&quot;React&quot;</span>
                  <span className="code-white">,</span>
                </div>

                <div className="code-indent">
                  <span className="code-green">&quot;Node.js&quot;</span>
                  <span className="code-white">,</span>
                </div>

                <div className="code-indent">
                  <span className="code-green">&quot;MongoDB&quot;</span>
                  <span className="code-white">,</span>
                </div>

                <div className="code-indent">
                  <span className="code-green">&quot;AI&quot;</span>
                </div>

                <div>
                  <span className="code-number">09</span>
                  <span className="code-white">],</span>
                </div>

                <div>
                  <span className="code-number">10</span>
                  <span className="code-key">passion:</span>{" "}
                  <span className="code-green">
                    &quot;Build. Learn. Improve.&quot;
                  </span>
                </div>

                <div>
                  <span className="code-number">11</span>
                  <span className="code-white">&#125;</span>
                </div>

                <div className="cursor-line">
                  <span className="code-purple">export default</span>{" "}
                  <span className="code-blue">developer</span>
                  <span className="typing-cursor">|</span>
                </div>
              </div>
            </div>

            <div className="floating-badge badge-react">
              <span>✦</span>
              React
            </div>

            <div className="floating-badge badge-node">
              <span>◆</span>
              Node.js
            </div>

            <div className="floating-badge badge-ai">
              <span>✦</span>
              AI
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section className="section" id="about">
          <div className="section-heading">
            <p className="section-number">02 — ABOUT</p>

            <h2>
              More than just
              <br />
              <span>writing code.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-text">
                I enjoy creating products that are{" "}
                <span>useful, intuitive,</span> and thoughtfully engineered.
              </p>

              <p>
                I’m a developer who enjoys working across the stack — from
                designing clean interfaces with React to building APIs and
                database-driven applications on the backend.
              </p>

              <p>
                My current focus is strengthening my development skills by
                building real-world projects and exploring how AI can make
                software more useful and intelligent.
              </p>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                View my GitHub
                <span>↗</span>
              </a>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">03</span>
                <span className="stat-label">Projects</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Primary Stack</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">AI</span>
                <span className="stat-label">Exploring</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">∞</span>
                <span className="stat-label">Learning Mindset</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ====================================================== */}

        <section className="section" id="skills">
          <div className="split-heading">
            <div className="section-heading">
              <p className="section-number">03 — SKILLS</p>

              <h2>
                Tools I use to
                <br />
                build <span>things.</span>
              </h2>
            </div>

            <p className="heading-description">
              A growing toolkit built through hands-on projects,
              experimentation, and continuous learning.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <div className="skill-icon">{skill.icon}</div>

                <div className="skill-info">
                  <h3>{skill.title}</h3>
                  <span>{skill.level}</span>
                </div>

                <span className="arrow-icon">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section className="section" id="projects">
          <div className="split-heading">
            <div className="section-heading">
              <p className="section-number">04 — SELECTED WORK</p>

              <h2>
                Things I've
                <br />
                <span>built.</span>
              </h2>
            </div>

            <p className="heading-description">
              Real projects where I’ve turned concepts into working
              applications and learned by solving actual problems.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>

                <div className="project-info">
                  <div className="project-topline">
                    <span>{project.category}</span>

                    <span
                      className={`project-status ${
                        project.status === "COMPLETED" ? "completed" : ""
                      }`}
                    >
                      <i />
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                      <span className="arrow-icon">↗</span>
                    </a>
                  </div>
                </div>

                <div className="project-action">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            APPROACH
        ====================================================== */}

        <section className="section">
          <div className="approach-card">
            <div className="approach-number">05</div>

            <div className="approach-content">
              <p className="section-number">MY APPROACH</p>

              <h2>
                Learn by building.
                <br />
                <span>Improve by iterating.</span>
              </h2>

              <p>
                I believe the best way to grow as a developer is to build
                things that challenge you. Every project is an opportunity to
                understand something deeper, write better code, and create a
                better experience.
              </p>
            </div>

            <div className="approach-points">
              <div>
                <span>01</span>

                <div>
                  <strong>Understand</strong>
                  <p>Break the problem into meaningful pieces.</p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <strong>Build</strong>
                  <p>Turn ideas into functional products.</p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <strong>Iterate</strong>
                  <p>Refine, improve, and learn from the process.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section className="section contact-section" id="contact">
          <div className="contact-inner">
            <p className="section-number">06 — CONTACT</p>

            <h2>
              Have an opportunity
              <br />
              worth <span>talking about?</span>
            </h2>

            <p className="contact-description">
              I&apos;m currently looking for internship opportunities where I
              can contribute, learn from experienced developers, and grow by
              working on meaningful products.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="contact-email"
            >
              {EMAIL}
              <span>↗</span>
            </a>

            <div className="contact-links">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a href="#" onClick={(e) => e.preventDefault()}>
                Resume
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">
        <div>
          <span className="footer-brand">
            Ankit<span>.</span>
          </span>

          <span className="footer-note">
            Built with React & curiosity.
          </span>
        </div>

        <span>© 2026 Ankit Kumar</span>

        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;