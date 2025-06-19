import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "CrowdStrike",
      location: "San Antonio, Texas",
      period: "01/2021 - Present",
      achievements: [
        "Led a team to develop scalable, SOA-based services, increasing system uptime by 30%",
        "Collaborated with UX Designers and Product Managers to implement optimized cybersecurity solutions, resulting in a 30% improvement in user interaction",
        "Enhanced system architecture to support microservices UIs, leading to a 40% faster page loading times",
        "Implemented efficient monitoring strategies that reduced response time to system issues by 50%",
        "Ensured compliance with security standards, integrating controls that reduced vulnerabilities by 25%",
      ],
    },
    {
      title: "Software Engineer",
      company: "Raytheon Technologies",
      location: "Dallas, Texas",
      period: "05/2017 - 12/2020",
      achievements: [
        "Developed a large-scale distributed system that improved data processing speed by 35%",
        "Succeeded in end-to-end technical project delivery, resulting in 20% faster project completion times",
        "Integrated API design and best practices, increasing system integration efficiency by 25%",
        "Worked well on designing fault-tolerant systems, reducing downtime by a significant margin of 40%",
      ],
    },
    {
      title: "Systems Engineer",
      company: "NortonLifeLock",
      location: "Houston, Texas",
      period: "06/2015 - 04/2017",
      achievements: [
        "Excelled in implementing testing protocols, achieving a 35% decrease in system errors",
        "Streamlined backend processes, cutting down user latching time by 30%",
        "Implemented process improvements with highly developed training, enhancing team alignment and reducing onboarding time by 30%",
        "Participated in requirement gathering and architecture design, resulting in an overall 25% improvement in project clarity and execution",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1e3a5f] tracking-tight">
        EXPERIENCE
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-gray-100 mb-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  {exp.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {exp.company} | {exp.location}
                </p>
              </div>
              <span className="text-gray-600 text-sm">{exp.period}</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm mt-2">
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
