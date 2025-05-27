import React from "react";

const Projects = () => {
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

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">🧪 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              {project.name}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {project.details.map((detail, i) => (
                <li key={i} className="text-gray-600">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
