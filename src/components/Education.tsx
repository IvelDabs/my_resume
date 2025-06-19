import React from "react";

const Education = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#1e3a5f]">EDUCATION</h2>
      <div className="space-y-4">
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-[#1e3a5f]">
                Master of Science in Computer Science
              </h3>
              <p className="text-gray-700 text-sm">
                The University of Texas at Austin | Austin, Texas
              </p>
            </div>
            <span className="text-gray-600 text-sm">01/2013 - 01/2015</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-[#1e3a5f]">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-gray-700 text-sm">
                University of Houston | Houston, Texas
              </p>
            </div>
            <span className="text-gray-600 text-sm">01/2009 - 12/2012</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
