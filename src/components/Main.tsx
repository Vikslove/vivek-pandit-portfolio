import React from "react";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              SOFTWARE DEVELOPER · DATA &amp; AI ENTHUSIAST
            </div>

            <h1>
              Hi, I&apos;m <span>Vivek Pandit.</span>
              <br />
              Turning ideas into useful digital experiences.
            </h1>

            <p className="hero-description">
              I&apos;m a computer application postgraduate with
              interests in software development, Python, data
              analytics, and artificial intelligence. I enjoy
              building practical projects, solving problems, and
              turning ideas into real-world solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects{" "}
                <span aria-hidden="true">↗</span>
              </a>

              {/* OPEN RESUME FROM THE WEBSITE */}
              <a
                className="button button-secondary"
                href="/Vivek-Pandit-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Vikslove"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/vivekpandit8390/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="#contact">Contact ↗</a>
            </div>
          </div>

          {/* PROFILE VISUAL */}
          <div
            className="hero-visual"
            aria-label="Vivek Pandit profile"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
        
{/* FLOATING SOCIAL ICONS */}
<div className="hero-social-icons">
  <a
    className="hero-social-icon social-github"
    href="https://github.com/Vikslove"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my GitHub profile"
    title="GitHub"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  </a>

  <a
    className="hero-social-icon social-linkedin"
    href="https://www.linkedin.com/in/vivekpandit8390/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my LinkedIn profile"
    title="LinkedIn"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.5h3.8V21H3.3V9.5Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.5V9.5Z" />
    </svg>
  </a>

  <a
    className="hero-social-icon social-instagram"
    href="https://www.instagram.com/vikss_space/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my Instagram profile"
    title="Instagram"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  </a>
</div>


            <div className="profile-placeholder">
              <img
                className="profile-photo"
                src="/images/vivek-profile.jpg"
                alt="Portrait of Vivek Pandit"
              />
            </div>

            <div className="floating-card floating-card-top">
              <span className="mini-icon">⌘</span>
              <span>
                <strong>Problem solver</strong>
                <small>Always learning</small>
              </span>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="mini-icon">✦</span>
              <span>
                <strong>Python · Data · AI</strong>
                <small>Building practical projects</small>
              </span>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#about">
          <span />
          Scroll to explore
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-kicker">A LITTLE ABOUT ME</span>

          <h2>
            Curious by nature.
            <br />
            <span>Driven to create.</span>
          </h2>
        </div>

        <div className="about-grid">
          <p className="about-lead">
            I&apos;m a computer application graduate and
            postgraduate learner who enjoys exploring technology
            and building solutions to real-world problems.
          </p>

          <div className="about-copy">
            <p>
              My journey spans programming, web development, data
              analytics, and machine learning. Through academic
              projects and industry-based job simulations, I&apos;ve
              developed practical experience in analysing data,
              building applications, and approaching technical
              problems with a structured mindset.
            </p>

            <p>
              I believe in learning by building. From developing a
              full-stack Online Voting System to exploring supply
              chain data, I aim to turn what I learn into projects
              that demonstrate my skills. I continue to improve my
              programming fundamentals, problem-solving ability,
              and understanding of modern technologies.
            </p>
          </div>
        </div>

        <div className="quick-facts">
          <div>
            <strong>MCA · 2025–2027</strong>
            <span>Education journey</span>
          </div>

          <div>
            <strong>Python · Data · AI</strong>
            <span>Technical interests</span>
          </div>

          <div>
            <strong>Build · Learn · Improve</strong>
            <span>My mindset</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
