import React from "react";

const Certifications = () => {
  const keyAchievements = [
    {
      title: "Developed High-Performance System",
      description:
        "Led a team to develop a system with 20% increased uptime, improving scalability and performance.",
    },
    {
      title: "Reduced Bug Rate",
      description:
        "Implemented testing protocols resulting in a 35% bug rate reduction through improved best coding practices.",
    },
    {
      title: "Enhanced User Interaction",
      description:
        "Implemented user interface UIs by 30%, improving overall user satisfaction significantly.",
    },
    {
      title: "Improved System Response",
      description:
        "Devised monitoring strategies that enhanced operational efficiency.",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1e3a5f] tracking-tight">
        CERTIFICATIONS
      </h2>
      <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-gray-100 space-y-2">
        {keyAchievements.map((achievement, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-[#1e3a5f] font-semibold text-sm">
              ✓ {achievement.title}
            </h3>
            <p className="text-gray-700 text-sm pl-4">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
