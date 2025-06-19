import React from "react";
import "../app/sidebar.css";
import "../app/sidebar-section.css";

const certifications = [
  {
    name: "Scrimba - Frontend Developer Career Path",
    details:
      "Comprehensive program covering React, JavaScript, UI/UX, and modern frontend workflows. Emphasized hands-on projects and real-world application design.",
  },
  {
    name: "FreeCodeCamp Full Stack Web Development Certificate",
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
