import React from "react";

const TechnicalSkills = () => {
  const skills = {
    SKILLS: [
      "Java",
      "Kotlin",
      "API Design",
      "Kubernetes",
      "SOA-based Services",
    ],
    COURSES: ["Advanced Cloud-based Services", "Kubernetes for Developers"],
    PASSIONS: [
      "Cybersecurity by Innovation",
      "Cross-Disciplinary Collaboration",
    ],
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#1e3a5f]">
        TECHNICAL SKILLS
      </h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-4">
            <h3 className="font-semibold text-lg mb-2 text-[#1e3a5f]">
              {category}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {skillList.map((skill) => (
                <li key={skill} className="text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
