import { useEffect, useState } from "react";
import "./App.css";

const GITHUB_URL = "https://github.com/ankitkumar-dev07";
const LINKEDIN_URL = "https://www.linkedin.com/in/ankitkumar-da/";
const EMAIL = "ak7543796@gmail.com";

const projects = [
  {
    number: "01",
    category: "AI / FULL STACK",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis platform with ATS-focused scoring, skill-gap detection, job matching, resume parsing, and AI-generated improvement suggestions.",
    details:
      "Designed as an end-to-end application with a React.js frontend, Express.js REST API backend, and MongoDB data storage.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration"],
    github: "https://github.com/ankitkumar-dev07/career-lens-ai",
  },
  {
    number: "02",
    category: "FULL STACK",
    title: "Smart Expense Tracker",
    description:
      "A full-stack personal finance application for tracking expenses and organizing transactions with spending-pattern monitoring and financial activity visualization.",
    details:
      "Includes CRUD operations, database management, and a responsive React.js interface for managing financial activity.",
    tags: ["React.js", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/ankitkumar-dev07/smart-expense-tracker",
  },
  {
    number: "03",
    category: "MERN / FULL STACK",
    title: "NovaCart – MERN E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product browsing, cart management, and user authentication.",
    details:
      "Built REST APIs for product, cart, and user management and structured the backend with modular components for maintainability and future feature expansion.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/ankitkumar-dev07/novacart-mern-ecommerce",
  },
];

const technicalSkills = [
  { icon: "JS", title: "JavaScript (ES6+)", level: "Language" },
  { icon: "⚛", title: "React.js", level: "Frontend" },
  { icon: "<>" , title: "HTML5", level: "Frontend" },
  { icon: "#", title: "CSS3", level: "Frontend" },
  { icon: "◆", title: "Node.js", level: "Backend" },
  { icon: "EX", title: "Express.js", level: "Backend" },
  { icon: "↗", title: "REST APIs", level: "Backend" },
  { icon: "API", title: "API Integration", level: "Backend" },
  { icon: "M", title: "MongoDB", level: "Database" },
  { icon: "CRUD", title: "CRUD Operations", level: "Database" },
  { icon: "JWT", title: "User Authentication (JWT)", level: "Authentication" },
  { icon: "ACL", title: "Authorization", level: "Authentication" },
  { icon: "GIT", title: "Git", level: "Version Control" },
  { icon: "GH", title: "GitHub", level: "Version Control" },
  { icon: "AI", title: "AI-assisted Development Tools", level: "Tools & Platforms" },
  { icon: "✓", title: "Testing", level: "Core Competency" },
  { icon: "FIX", title: "Troubleshooting", level: "Core Competency" },
  { icon: "DEP", title: "Application Deployment", level: "Core Competency" },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork & Collaboration",
  "Adaptability",
  "Time Management",
  "Attention to Detail",
  "Continuous Learning",
];

const certifications = [
  {
    year: "SEP 2026",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    detail: "Certificate of Accomplishment",
  },
  {
    year: "SEP 2026",
    title: "Introduction to Software Engineering Job Simulation",
    issuer: "Commonwealth Bank via Forage",
    detail: "Job Simulation",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio" id="top">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="navbar">
        <div className="nav-inner">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Ankit Kumar home">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Ankit<span className="brand-dot">.</span></span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a className="nav-github" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub <span>↗</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              Seeking MERN Stack Developer internship opportunities
            </div>

            <p className="hero-eyebrow">
              <span>01</span>
              ASPIRING MERN STACK DEVELOPER
            </p>

            <h1>
              Building full-stack
              <br />
              <span className="gradient-text">web applications</span>
              <br />
              with purpose.
            </h1>

            <p className="hero-description">
              Hi, I’m <strong>Ankit Kumar</strong> — a BCA undergraduate in my 3rd semester,
              building full-stack web projects with MongoDB, Express.js, React.js, and Node.js.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span>↗</span>
              </a>
              <a href="#contact" className="button button-secondary">Let&apos;s connect</a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">BASED IN</span>
                <span>Sonpur, Bihar, India</span>
              </div>
              <div>
                <span className="meta-label">EDUCATION</span>
                <span>BCA · 3rd Semester</span>
              </div>
              <div>
                <span className="meta-label">FOCUS</span>
                <span>MERN / Full Stack</span>
              </div>
              <div>
                <span className="meta-label">LOOKING FOR</span>
                <span>Developer Internship</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="developer-card">
              <div className="card-top">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">developer.jsx</span>
              </div>

              <div className="code-content">
                <div><span className="code-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> <span className="code-white">=</span> <span className="code-white">&#123;</span></div>
                <div><span className="code-number">02</span><span className="code-key">name:</span> <span className="code-green">&quot;Ankit Kumar&quot;</span><span className="code-white">,</span></div>
                <div><span className="code-number">03</span><span className="code-key">role:</span> <span className="code-green">&quot;MERN Stack Developer&quot;</span><span className="code-white">,</span></div>
                <div><span className="code-number">04</span><span className="code-key">stack:</span> <span className="code-white">[</span></div>
                <div className="code-indent"><span className="code-green">&quot;React.js&quot;</span><span className="code-white">,</span></div>
                <div className="code-indent"><span className="code-green">&quot;Node.js&quot;</span><span className="code-white">,</span></div>
                <div className="code-indent"><span className="code-green">&quot;Express.js&quot;</span><span className="code-white">,</span></div>
                <div className="code-indent"><span className="code-green">&quot;MongoDB&quot;</span></div>
                <div><span className="code-number">09</span><span className="code-white">],</span></div>
                <div><span className="code-number">10</span><span className="code-key">education:</span> <span className="code-green">&quot;BCA · 3rd Semester&quot;</span></div>
                <div><span className="code-number">11</span><span className="code-white">&#125;</span></div>
                <div className="cursor-line"><span className="code-purple">export default</span> <span className="code-blue">developer</span><span className="typing-cursor">|</span></div>
              </div>
            </div>

            <div className="floating-badge badge-react"><span>✦</span>React.js</div>
            <div className="floating-badge badge-node"><span>◆</span>Node.js</div>
            <div className="floating-badge badge-ai"><span>✦</span>AI Tools</div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="section-number">02 — ABOUT</p>
            <h2>Building skills through<br /><span>real projects.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-text">
                I&apos;m an aspiring <span>MERN Stack Developer</span> focused on learning by building full-stack applications.
              </p>

              <p>
                I&apos;m a BCA undergraduate in my 3rd semester with hands-on experience building three full-stack web projects using MongoDB, Express.js, React.js, and Node.js.
              </p>

              <p>
                My development experience includes REST API design, API integration, CRUD operations, authentication and authorization, database management, responsive web design, testing, troubleshooting, version control, and application deployment.
              </p>

              <p>
                I&apos;m also exploring AI-powered development tools and workflows. My goal is to contribute to real-world software development through a MERN Stack Developer internship while strengthening my production engineering skills.
              </p>

              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-link">
                View my GitHub <span>↗</span>
              </a>
            </div>

            <div className="about-stats">
              <div className="stat-card"><span className="stat-number">03</span><span className="stat-label">Full-stack projects</span></div>
              <div className="stat-card"><span className="stat-number">MERN</span><span className="stat-label">Primary development stack</span></div>
              <div className="stat-card"><span className="stat-number">7.04</span><span className="stat-label">Semester 1 CGPA / 10</span></div>
              <div className="stat-card"><span className="stat-number">2028</span><span className="stat-label">Expected graduation</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="split-heading">
            <div className="section-heading">
              <p className="section-number">03 — SKILLS</p>
              <h2>Technologies I use<br />to <span>build.</span></h2>
            </div>
            <p className="heading-description">
              A practical toolkit developed through hands-on full-stack projects, API work, database management, testing, troubleshooting, and continuous learning.
            </p>
          </div>

          <div className="skills-category">
            <div className="skills-category-heading">
              <div>
                <p className="skills-label">TECHNICAL SKILLS</p>
                <h3>My current development toolkit.</h3>
              </div>
              <span className="skills-count">18 SKILLS</span>
            </div>

            <div className="skills-grid">
              {technicalSkills.map((skill) => (
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
          </div>

          <div className="soft-skills-section">
            <div className="skills-category-heading">
              <div>
                <p className="skills-label">SOFT SKILLS</p>
                <h3>How I approach my work.</h3>
              </div>
              <span className="skills-count">07 SKILLS</span>
            </div>

            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div className="soft-skill-card" key={skill}>
                  <span className="soft-skill-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="soft-skill-title">{skill}</span>
                  <span className="soft-skill-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="split-heading">
            <div className="section-heading">
              <p className="section-number">04 — PROJECT EXPERIENCE</p>
              <h2>Things I&apos;ve<br /><span>built.</span></h2>
            </div>
            <p className="heading-description">
              Three full-stack projects that demonstrate my experience with React.js, Node.js, Express.js, MongoDB, REST APIs, authentication, CRUD operations, and AI integration.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-info">
                  <div className="project-topline">
                    <span>{project.category}</span>
                    <span className="project-status completed"><i />PROJECT</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-detail">{project.details}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      View GitHub <span className="arrow-icon">↗</span>
                    </a>
                  </div>
                </div>

                <div className="project-action">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="split-heading">
            <div className="section-heading">
              <p className="section-number">05 — EDUCATION & CERTIFICATIONS</p>
              <h2>Learning with a<br /><span>builder&apos;s mindset.</span></h2>
            </div>
            <p className="heading-description">
              My current academic journey and software-engineering learning milestones.
            </p>
          </div>

          <div className="credentials-grid">
            <article className="education-card">
              <div className="credential-label">EDUCATION</div>
              <div className="education-year">2028</div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p className="credential-institution">Indian Institute of Business Management Patna</p>
              <div className="education-meta">
                <span>Currently in 3rd Semester</span>
                <span>CGPA: 7.04 / 10 · Semester 1</span>
                <span>Expected Graduation: 2028</span>
              </div>
            </article>

            <div className="certifications-card">
              <div className="credential-label">CERTIFICATIONS</div>
              <div className="certification-list">
                {certifications.map((cert, index) => (
                  <article className="certification-item" key={cert.title}>
                    <span className="cert-number">0{index + 1}</span>
                    <div>
                      <span className="cert-date">{cert.year}</span>
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer}</p>
                      <span className="cert-detail">{cert.detail}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="approach-card">
            <div className="approach-number">06</div>
            <div className="approach-content">
              <p className="section-number">MY APPROACH</p>
              <h2>Learn by building.<br /><span>Improve by iterating.</span></h2>
              <p>
                I focus on understanding the problem, building a working solution, testing it, troubleshooting issues, and improving the result through iteration and continuous learning.
              </p>
            </div>

            <div className="approach-points">
              <div><span>01</span><div><strong>Understand</strong><p>Break the problem into meaningful pieces.</p></div></div>
              <div><span>02</span><div><strong>Build</strong><p>Turn ideas into functional full-stack products.</p></div></div>
              <div><span>03</span><div><strong>Iterate</strong><p>Test, troubleshoot, refine, and keep learning.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-inner">
            <p className="section-number">07 — CONTACT</p>
            <h2>Looking for an opportunity<br /><span>to grow and contribute?</span></h2>
            <p className="contact-description">
              I&apos;m currently seeking a MERN Stack Developer internship where I can contribute to real-world software development, learn from experienced developers, and strengthen my production engineering skills.
            </p>

            <a href={`mailto:${EMAIL}`} className="contact-email">
              {EMAIL} <span>↗</span>
            </a>

            <div className="contact-links">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a href={`mailto:${EMAIL}?subject=Internship Opportunity`}>Email <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <span className="footer-brand">Ankit<span>.</span></span>
          <span className="footer-note">MERN Stack Developer · BCA Undergraduate</span>
        </div>
        <span>© 2026 Ankit Kumar</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
