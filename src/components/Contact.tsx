import React from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <span className="section-kicker">LET'S CONNECT</span>

          <h2>
            Have an opportunity or idea?
            <br />
            <span>Let's talk.</span>
          </h2>

          <p>
            I'm open to entry-level software development roles,
            internship opportunities, collaborative projects, and
            conversations about technology. Outside coding, I also
            enjoy creating content and exploring creative ideas.
          </p>

          <a
            className="button button-primary"
            href="mailto:vivekpandit8390@gmail.com"
          >
            Send me an email <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-links">
          {/* EMAIL */}
          <a
            href="mailto:vivekpandit8390@gmail.com"
            className="contact-link"
          >
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="contact-link-text">
              <span>Email</span>
              <strong>vivekpandit8390@gmail.com ↗</strong>
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+918390442495"
            className="contact-link"
          >
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 3h3l2 5-2.2 1.6a15 15 0 0 0 4.6 4.6L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6c0-1.7.9-3 2-3Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="contact-link-text">
              <span>Phone</span>
              <strong>+91 83904 42495 ↗</strong>
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/vivekpandit8390/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.5h3.8V21H3.3V9.5Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.5V9.5Z" />
              </svg>
            </span>
            <span className="contact-link-text">
              <span>LinkedIn</span>
              <strong>Let's connect professionally ↗</strong>
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Vikslove"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </span>
            <span className="contact-link-text">
              <span>GitHub</span>
              <strong>Explore my code ↗</strong>
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/vikss_space/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </span>
            <span className="contact-link-text">
              <span>Instagram · Content Creator</span>
              <strong>@vikss_space ↗</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
