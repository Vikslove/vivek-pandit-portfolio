import React from "react";
import "../assets/styles/Expertise.scss";

const groups = [
  {
    number: "01",
    title: "Programming",
    intro:
      "Writing code, strengthening programming fundamentals, and solving problems.",
    skills: ["Python", "Java", "C++", "JavaScript"],
  },
  {
    number: "02",
    title: "Web Development",
    intro:
      "Building web interfaces and applications connected to databases.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"],
  },
  {
    number: "03",
    title: "Data & AI",
    intro:
      "Exploring data, machine learning, and predictive applications.",
    skills: [
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Streamlit",
    ],
  },
  {
    number: "04",
    title: "Tools & Databases",
    intro:
      "Using development tools and databases to build and manage projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "SQLite",
      "MySQL",
      "Jupyter Notebook",
      "XAMPP",
    ],
  },
];

function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="section-heading">
        <span className="section-kicker">WHAT I WORK WITH</span>

        <h2>
          Skills &amp; <span>toolkit.</span>
        </h2>

        <p>
          Technologies I&apos;ve explored through coursework,
          hands-on projects, and continuous learning.
        </p>
      </div>

      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span>{group.number}</span>
              <span className="skill-mark" aria-hidden="true">
                ↗
              </span>
            </div>

            <h3>{group.title}</h3>
            <p>{group.intro}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
