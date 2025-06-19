import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "ABC Tech Solutions",
      location: "New York, NY",
      period: "Jan 2022 – Present",
      achievements: [
        "Developed and maintained scalable SaaS applications using React.js, Node.js, and PostgreSQL, serving over 15,000 users.",
        "Implemented role-based authentication, payment integration (Stripe), and RESTful API endpoints.",
        "Led the migration of legacy systems to microservices architecture, reducing deployment time by 40%.",
        "Collaborated in Agile sprints with designers and stakeholders to deliver new features on schedule.",
        "Conducted code reviews and mentored 2 junior developers, improving team code quality.",
      ],
    },
    {
      title: "Software Engineer (Intern)",
      company: "XYZ Labs",
      location: "Remote",
      period: "Jun 2021 – Dec 2021",
      achievements: [
        "Built reusable React components and optimized performance with lazy loading and memoization.",
        "Assisted in writing unit tests, achieving 90% code coverage for key modules.",
        "Created REST APIs with Express.js for mobile applications.",
        "Participated in daily stand-ups, sprint planning, and retrospective meetings.",
      ],
    },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        💼 Professional Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-700">{exp.title}</h3>
                <p className="text-gray-700">
                  {exp.company} – {exp.location}
                </p>
              </div>
              <span className="text-gray-600 text-sm">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
