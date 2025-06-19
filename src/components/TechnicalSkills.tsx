import React from "react";

const TechnicalSkills = () => {
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

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        🛠️ Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2 text-blue-700">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
