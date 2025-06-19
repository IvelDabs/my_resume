import React from "react";
import "../app/sidebar.css";

const skills = {
  Languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "HTML5",
    "CSS3",
  ],
  "Frameworks/Libraries": [
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Django",
    "Spring Boot",
  ],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  "DevOps & Tools": [
    "Git",
    "Docker",
    "CI/CD (GitHub Actions, Jenkins)",
    "Nginx",
    "AWS",
    "Azure",
  ],
  Testing: ["Jest", "Cypress", "Mocha", "Postman"],
  Other: ["REST APIs", "GraphQL", "WebSockets", "Agile/Scrum", "MVC", "OOP"],
};

const TechnicalSkills = () => {
  return (
    <ul>
      {Object.entries(skills).map(([category, skillList]) => (
        <li key={category} style={{ marginBottom: "1.2rem" }}>
          <strong>{category}</strong>
          <div
            style={{
              color: "#e0e7ef",
              fontSize: "0.95rem",
              marginTop: "0.3rem",
            }}
          >
            {skillList.join(", ")}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TechnicalSkills;
