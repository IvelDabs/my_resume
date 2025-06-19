import React from "react";
import "../app/sidebar.css";
import "../app/sidebar-section.css";

const certifications = [
  {
    name: "Scrimba - FullStack Developer Career Path",
    details:
      "A project-based program covering HTML, CSS, JavaScript, React, APIs, state management, authentication, deployment, and modern fullstack workflows. Includes real-world team projects, code reviews, and portfolio development to prepare for professional fullstack roles.",
  },
  {
    name: "FreeCodeCamp Full Stack Web Development Certificate",
    details:
      "Intensive curriculum in JavaScript, Node.js, databases, and responsive web design. Focused on building scalable, production-ready applications.",
  },
  {
    name: "Coursera - Meta Meta Front-End Developer Professional Certificate",
    details:
      "Intensive curriculum in JavaScript, Node.js, databases, and responsive web design. Focused on building scalable, production-ready applications.",
  },
];

const Certifications = () => {
  return (
    <ul>
      {certifications.map((cert, index) => (
        <li key={index} style={{ marginBottom: "1.2rem" }}>
          <strong>{cert.name}</strong>
          <p style={{ color: "#e0e7ef", fontSize: "0.95rem" }}>
            {cert.details}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Certifications;
