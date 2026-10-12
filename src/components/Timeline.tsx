
import React from "react";
import "../assets/styles/Timeline.scss";

const journey = [
  {
    date: "JUL 2025 — MAY 2027",
    type: "EDUCATION",
    title: "Master of Computer Applications (MCA)",
    place:
      "MGM's Jawaharlal Nehru College of Engineering · Chhatrapati Sambhajinagar",
    description:
      "Advanced study in computer applications, software development, data analytics, and applied computing.",
  },
  {
    date: "JUN 2022 — JUN 2025",
    type: "EDUCATION",
    title: "Bachelor of Computer Applications (BCA)",
    place: "Deogiri College · Chhatrapati Sambhajinagar",
    description:
      "Developed a foundation in programming, databases, web development, and computer science through coursework and projects.",
  },
  {
    date: "JUN 2021 — JUN 2022",
    type: "PROFESSIONAL EXPERIENCE",
    title: "Teaching Assistant",
    place: "Saya Education Hub · Chhatrapati Sambhajinagar",
    description:
      "Supported students learning Python, HTML, and CSS through coding exercises, learning materials, and debugging assistance.",
  },
  {
    date: "JAN 2025 — JUN 2025",
    type: "VIRTUAL JOB SIMULATION",
    title: "GenAI-Powered Data Analytics",
    place: "Tata Group · Forage",
    description:
      "Explored data analytics, data visualization, statistical analysis, and business problem-solving with generative AI.",
  },
  {
    date: "MAY 2025 — JUN 2025",
    type: "VIRTUAL JOB SIMULATION",
    title: "Data Analytics",
    place: "Deloitte Australia · Forage",
    description:
      "Practised data analysis, dashboard development, and interpreting trends through a virtual job simulation.",
  },
  {
    date: "AUG 2024 — SEP 2024",
    type: "INTERNSHIP",
    title: "Java Programmer Intern",
    place: "CodSoft",
    description:
      "Strengthened Java programming fundamentals through internship assignments and practical coding exercises.",
  },
];

const certifications = [
  "Microsoft — Introduction to Generative AI Concepts",
  "Infosys Springboard — Data Analytics Learning",
  "Tata Group — GenAI-Powered Data Analytics Job Simulation",
  "Deloitte Australia — Data Analytics Job Simulation",
  "NIELIT — Robotic Process Automation (RPA)",
  "Simplilearn — Introduction to Computer Networking",
];

function Timeline() {
  return (
    <section className="section journey-section" id="history">
      <div className="section-heading">
        <span className="section-kicker">THE JOURNEY SO FAR</span>
        <h2>
          Education &amp; <span>experience.</span>
        </h2>
        <p>
          A snapshot of the learning milestones and experiences
          shaping my professional journey.
        </p>
      </div>

      <div className="journey-list">
        {journey.map((item, index) => (
          <article className="journey-item" key={item.title}>
            <div className="journey-marker">
              <span>
                {("0" + (index + 1)).slice(-2)}
              </span>
            </div>

            <div className="journey-content">
              <div className="journey-meta">
                <span>{item.type}</span>
                <time>{item.date}</time>
              </div>

              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="certifications">
        <div>
          <span className="section-kicker">
            CONTINUOUS LEARNING
          </span>
          <h3>Certifications &amp; learning</h3>
        </div>

        <div className="cert-list">
          {certifications.map((certification) => (
            <span key={certification}>{certification}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
