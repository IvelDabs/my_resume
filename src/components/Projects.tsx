import React from "react";
import "../app/sidebar.css";
import "../app/sidebar-section.css";

const projects = [
  {
    name: "AstroTrack – Space Observation Dashboard",
    details: [
      "A full stack web app using React, Node.js, and MongoDB to track satellite orbits in real-time.",
      "Integrated NASA APIs and D3.js visualizations for data-driven dashboards.",
      "Deployed via Vercel and Docker on AWS EC2 with custom domain and HTTPS.",
    ],
  },
  {
    name: "DevHire – Developer Job Board",
    details: [
      "Built a responsive job board platform with Next.js, Tailwind CSS, and Firebase.",
      "Implemented job filtering, resume upload, and recruiter dashboard.",
    ],
  },
];

const Projects = () => {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index} style={{ marginBottom: "1.2rem" }}>
          <strong>{project.name}</strong>
          <ul
            style={{
              color: "#e0e7ef",
              fontSize: "0.95rem",
              marginLeft: "1rem",
            }}
          >
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
