import React from "react";
import Projects from "./Projects";
import Certifications from "./Certifications";
import TechnicalSkills from "./TechnicalSkills";
import "../app/sidebar.css";
import "../app/sidebar-section.css";

// const achievements = [
//   {
//     title: "Developed High-Performance System",
//     description:
//       "Led a team to deliver a system with 20% increased uptime, optimizing scalability and performance for enterprise clients.",
//   },
//   {
//     title: "Reduced Bug Rate",
//     description:
//       "Mentored junior engineers, resulting in a 25% bug reduction through improved best coding practices and code reviews.",
//   },
//   {
//     title: "Enhanced User Interaction",
//     description:
//       "Implemented features that improved user interaction by 30%, increasing customer satisfaction and engagement.",
//   },
//   {
//     title: "Improved System Response",
//     description:
//       "Devised monitoring strategies that reduced response time to system issues by 50%, improving operational efficiency.",
//   },
//   {
//     title: "Security Compliance Champion",
//     description:
//       "Integrated robust security standards, reducing vulnerabilities by 35% and ensuring compliance with industry regulations.",
//   },
//   {
//     title: "Cross-Functional Collaboration",
//     description:
//       "Facilitated collaboration between design, product, and engineering teams, accelerating project delivery and innovation.",
//   },
// ];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* <section className="sidebar-section achievements">
        <h2>Key Achievements</h2>
        <ul>
          {achievements.map((item, idx) => (
            <li key={idx}>
              <strong>{item.title}</strong>
              <ul>
                <li>{item.description}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section> */}
      <section className="sidebar-section">
        <h2>Projects</h2>
        <Projects />
      </section>
      <section className="sidebar-section">
        <h2>Certifications</h2>
        <Certifications />
      </section>
      <section className="sidebar-section">
        <h2>Skills</h2>
        <TechnicalSkills />
      </section>
    </aside>
  );
};

export default Sidebar;
