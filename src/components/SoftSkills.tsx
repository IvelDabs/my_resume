import React from "react";

const SoftSkills = () => {
  const skills = [
    "Team Collaboration & Agile Communication",
    "Problem-Solving & Debugging",
    "Time Management & Deadline Discipline",
    "Creative Thinking & Rapid Learning",
    "Leadership & Peer Mentorship",
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">💬 Soft Skills</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-blue-50 rounded-lg transition-transform hover:scale-105"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
