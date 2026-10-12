import React from "react";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="site-footer">
      <a
        className="brand-mark"
        href="#home"
        aria-label="Back to top"
      >
        VP<span>.</span>
      </a>

      <p className="footer-message">
        Designed with care. Built with curiosity.
      </p>

      <div className="footer-socials">
        {/* GitHub */}
        <a
          href="https://github.com/Vikslove"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vivekpandit8390/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.5h3.8V21H3.3V9.5Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.5V9.5Z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/vikss_space/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
            />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>
      </div>

      <span className="footer-copyright">
        © {new Date().getFullYear()} Vivek Pandit. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
