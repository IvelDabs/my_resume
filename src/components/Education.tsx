import React from "react";

const Education = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">🎓 Education</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700">
          B.Sc. Software Development | Web Development
        </h3>
        <p className="text-gray-700 mb-4">
          Brigham Young University, Idaho| Graduation: July 2026
        </p>
        <div className="text-gray-600">
          <p className="font-semibold mb-2">Relevant coursework:</p>
          <p>
            Data Structures, Algorithms, Web Programming, Databases, Software
            Engineering
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
