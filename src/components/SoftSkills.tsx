import React from "react";

const SoftSkills = () => {
  const passions = [
    {
      title: "Cybersecurity by Innovation",
      description:
        "Deeply passionate about developing innovative solutions to proactively tackle cybersecurity challenges.",
    },
    {
      title: "Cross-Disciplinary Collaboration",
      description:
        "Enthusiastic about working with diverse teams to achieve common goals and drive technological progress.",
    },
  ];

  return (
    <section className="mt-8 text-white">
      <h2 className="text-2xl font-semibold mb-4">PASSIONS</h2>
      <div className="space-y-4">
        {passions.map((passion, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-sm mb-1">✓ {passion.title}</h3>
            <p className="text-sm opacity-90 pl-4">{passion.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
