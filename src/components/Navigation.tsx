import React, { useState } from "react";

interface NavigationProps {
  parentToChild: {
    mode: "dark" | "light";
  };
  modeChange: () => void;
}

const navItems = [
  ["About", "about"],
  ["Skills", "expertise"],
  ["Journey", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navigation({
  parentToChild,
  modeChange,
}: NavigationProps) {
  const { mode } = parentToChild;
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-nav">
      <a
        className="brand-mark"
        href="#home"
        aria-label="Vivek Pandit — Home"
        onClick={closeMenu}
      >
        VP<span>.</span>
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">
          {menuOpen ? "✕" : "☰"}
        </span>
      </button>

      <nav
        id="primary-navigation"
        className={menuOpen ? "nav-links nav-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {navItems.map(([label, section]) => (
          <button
            key={section}
            type="button"
            onClick={() => scrollToSection(section)}
          >
            {label}
          </button>
        ))}

        <button
          className="theme-toggle"
          type="button"
          onClick={modeChange}
          aria-label={`Switch to ${
            mode === "dark" ? "light" : "dark"
          } mode`}
          title={`Switch to ${
            mode === "dark" ? "light" : "dark"
          } mode`}
        >
          <span aria-hidden="true">
            {mode === "dark" ? "☼" : "☾"}
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
