"use client";

import { useEffect, useState } from "react";

const EMAIL = "anchitabiswas08@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const GITHUB = "https://github.com/anchita-biswas";
const LINKEDIN = "https://www.linkedin.com/in/anchita-biswas-22046a206";

// MERN stack first, then fundamentals and styling, then tooling.
const SKILLS = [
  { name: "MongoDB", img: "mongodb.svg" },
  { name: "Express.js", img: "express.svg" },
  { name: "React.js", img: "react js.png" },
  { name: "Node.js", img: "node js.png" },
  { name: "JavaScript", img: "javascript.png" },
  { name: "HTML", img: "html.png" },
  { name: "CSS", img: "css.png" },
  { name: "Sass", img: "sass.svg" },
  { name: "Tailwind CSS", img: "tailwindcss.svg" },
  { name: "Vite", img: "vite.svg" },
  { name: "Jest", img: "jest.svg" },
  { name: "Git", img: "git.svg" },
];

const PROJECTS = [
  {
    href: "https://eventora-88bu.onrender.com",
    img: "Eventora.png",
    alt: "Eventora Landing page",
    tags: ["Event Booking", "MongoDB", "Express.js", "React.js", "Node.js"],
    title: "Eventora",
    body: "Browse events, book seats through an OTP-verified checkout, and get a QR-code ticket by email. React (Vite) client on an Express + MongoDB API with JWT auth, rate limiting, and integration tests in Jest and Supertest.",
  },
  {
    href: "https://interviewprep-ai-hazx.onrender.com/",
    img: "Interview-prep-AI.png",
    alt: "Interview-prep-AI Landing page",
    tags: ["AI Platform", "Gemini AI", "MongoDB", "Express.js", "React.js", "Node.js"],
    title: "Interview Prep AI",
    body: "Paste a job description, upload your resume, and get a match score, tailored questions, skill gaps, and a day-by-day prep roadmap. Gemini responses are shaped by Zod schemas, behind JWT auth with token blacklisting, rate limiting, and Helmet.",
  },
  {
    href: "https://anchita-biswas.github.io/Blipkart/",
    img: "Blipkart.png",
    alt: "Blipkart Landing page",
    tags: ["E-Commerce", "JavaScript", "CSS"],
    title: "Blipkart",
    body: "A full-featured e-commerce platform for sports gear — product listings, cart, auth flow, and responsive design throughout.",
  },
  {
    href: "https://anchita-biswas.github.io/TinDog_Dating-Website/",
    img: "TinDog.png",
    alt: "TinDog Landing page",
    tags: ["Landing Page", "Bootstrap", "HTML"],
    title: "TinDog",
    body: "The dating website for dogs. A fun, responsive landing page — clean layout, playful copy, and smooth UX.",
  },
];

// Staggered scroll-reveal: [selector, delay step in ms] — matches the original design.
const REVEAL_GROUPS = [
  [".skill-card", 80],
  [".project-card", 100],
  [".social-row", 70],
  [".form-field", 70],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) el.target.classList.add("revealed");
        });
      },
      { threshold: 0.08 },
    );
    REVEAL_GROUPS.forEach(([selector, step]) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add("reveal");
        el.style.transitionDelay = `${300 + i * step}ms`;
        observer.observe(el);
      });
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 4000);
    return () => clearTimeout(t);
  }, [sent]);

  function handleForm(e) {
    e.preventDefault();
    e.target.reset();
    setSent(true);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          AB<span className="nav-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
          <a href={MAILTO} className="nav-cta">
            Hire me <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <button
          className="nav-mobile-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className={`nav-mobile-menu${menuOpen ? " open" : ""}`}
          id="mobileMenu"
        >
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href={MAILTO} onClick={closeMenu}>
            Hire me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-tag">
              <span className="tag-dot"></span> Open to opportunities
            </div>
            <h1 className="hero-heading">
              <span className="hero-line">Anchita</span>
              <span className="hero-line hero-line-accent">
                Biswas<span className="hero-period">.</span>
              </span>
            </h1>
            <p className="hero-sub">
              Full Stack Developer — I build responsive web apps that are fast,
              accessible, and delightful to use.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                See my work <i className="fa-solid fa-arrow-down"></i>
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
            <div className="hero-socials">
              <a href={GITHUB} target="_blank" rel="noreferrer" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href={MAILTO} title="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-img-wrap">
            <div className="hero-img-ring"></div>
            <div className="hero-img-card">
              <img src="/Images/Display picture.png" alt="Anchita Biswas" />
            </div>
            <div className="hero-badge hero-badge-1">
              <i className="fa-solid fa-code"></i>
              <span>Full Stack</span>
            </div>
            <div className="hero-badge hero-badge-2">
              <i className="fa-brands fa-react"></i>
              <span>React · Node</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <div className="skills-inner">
          <div className="section-label">// what I work with</div>
          <h2 className="section-heading">
            Skills &amp; <em>Tools</em>
          </h2>
          <p className="section-sub">
            A toolkit built through real projects and consistent practice — from
            structuring pages to building full-stack applications.
          </p>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div className="skill-card" key={s.name}>
                <div className="skill-icon">
                  <img src={`/Images/${s.img}`} alt={s.name} />
                </div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="projects-inner">
          <div className="section-label">// things I&apos;ve built</div>
          <h2 className="section-heading">
            Selected <em>Work</em>
          </h2>
          <p className="section-sub">
            A couple of things I&apos;ve built. More coming soon.
          </p>

          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="project-card"
                key={p.title}
              >
                <div className="project-screen">
                  <img src={`/Images/${p.img}`} alt={p.alt} />
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <div className="project-cta">
                    View live site
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="section-label">// let&apos;s connect</div>
          <h2 className="section-heading">
            Get in <em>Touch</em>
          </h2>
          <p className="section-sub">
            I&apos;m actively looking for full stack developer opportunities.
            Whether you have a role, a project, or just want to say hello — my
            inbox is always open.
          </p>

          <div className="contact-grid">
            <div className="contact-left">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="social-row"
              >
                <div className="social-icon-wrap">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="social-info">
                  <span className="social-name">LinkedIn</span>
                  <span className="social-handle">anchita-biswas</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square social-arrow"></i>
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="social-row"
              >
                <div className="social-icon-wrap">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="social-info">
                  <span className="social-name">GitHub</span>
                  <span className="social-handle">anchita-biswas</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square social-arrow"></i>
              </a>
              <a href={MAILTO} className="social-row">
                <div className="social-icon-wrap">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="social-info">
                  <span className="social-name">Email</span>
                  <span className="social-handle">{EMAIL}</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square social-arrow"></i>
              </a>
              <a href="tel:+919831914329" className="social-row">
                <div className="social-icon-wrap">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="social-info">
                  <span className="social-name">Phone</span>
                  <span className="social-handle">+91 9831 914 329</span>
                </div>
              </a>
            </div>

            <form className="contact-form" onSubmit={handleForm}>
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows="5"
                  placeholder="What's on your mind?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
              <p
                className={`form-success${sent ? " visible" : ""}`}
                id="formSuccess"
              >
                Thanks! I&apos;ll get back to you soon ✓
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-name">
            Anchita<span>.</span>
          </p>
          <p className="footer-copy">
            © 2026 Anchita Biswas — Designed &amp; Built with ❤️
          </p>
        </div>
      </footer>
    </>
  );
}
