import React from "react";

const Certifications = () => {
  const certifications = [
    // "AWS Certified Developer – Associate",
    // "Microsoft Certified: Azure Fundamentals",
    "Scrimba - Frontend Developer Career Path",
    "FreeCodeCamp Full Stack Web Development Certificate",
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        🧩 Certifications
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="space-y-3">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              <span className="text-gray-700">{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
