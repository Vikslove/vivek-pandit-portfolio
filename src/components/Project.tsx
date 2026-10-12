import React from "react";
import "../assets/styles/Project.scss";

const projects = [
  {
    number: "01",
    type: "ARTIFICIAL INTELLIGENCE · BANKING",
    title: "AI-Driven Bank Decision Making System",
    description:
      "An interactive banking application that uses machine learning to predict loan approval and assess credit risk. Includes model evaluation, application history, and data-driven insights.",
    stack: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Pandas",
      "SQLite",
    ],
    link: "https://banking-ai-system-byvivekandvaibhav.streamlit.app/",
    linkLabel: "Live Demo",
    status: "Live Application",
  },
  {
    number: "02",
    type: "ANDROID APP DEVELOPMENT",
    title: "Android Calculator App",
    description:
      "A mobile calculator application developed for Android, designed to provide a simple interface for performing everyday mathematical calculations.",
    stack: [
      "Java",
      "Android Studio",
      "XML",
    ],
    link: "#",
    status: "Android Development",
  },
  {
    number: "03",
    type: "FULL-STACK WEB DEVELOPMENT",
    title: "Online Voting System",
    description:
      "A web-based voting application with a frontend interface, PHP application logic, and MySQL data storage, developed as an academic project.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
    link: "https://github.com/Vikslove/online-voting-system-",
    linkLabel: "View on GitHub",
    status: "Web Development",
  },
  {
    number: "04",
    type: "DATA ANALYTICS · BUSINESS INTELLIGENCE",
    title: "BigBasket Supply Chain Analysis",
    description:
      "A data analytics project exploring supply chain performance, inventory patterns, and operational bottlenecks using data processing and KPI-focused visualizations.",
    stack: [
      "Python",
      "Pandas",
      "Power BI",
      "Excel",
    ],
    link: "#",
    status: "Data Analytics",
  },
  {
    number: "05",
    type: "SUPERVISED MACHINE LEARNING",
    title: "Loan Approval Prediction",
    description:
      "A machine learning workflow for preparing loan application data, training a classification model, and evaluating predictions with accuracy, precision, recall, and F1 score.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
    link: "#",
    status: "Predictive Analytics",
  },
];

function Project() {
  return (
    <section className="section projects-container" id="projects">
      <div className="section-heading">
        <span className="section-kicker">SELECTED WORK</span>

        <h2>
          Projects with <span>purpose.</span>
        </h2>

        <p>
          A collection of projects demonstrating my interests in
          software development, artificial intelligence, mobile
          applications, and data analytics.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.number}
          >
            <div className="project-card-head">
              <span className="project-number">
                /{project.number}
              </span>

              <span
                className="project-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            <span className="project-type">
              {project.type}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-card-footer">
              {project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="project-link-pending">
                  {project.linkLabel}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="project-note">
        Each project reflects my approach to learning, solving
        problems, and building practical technology solutions.
      </p>
    </section>
  );
}

export default Project;
