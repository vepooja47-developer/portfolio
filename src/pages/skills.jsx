// components/Skills.tsx

import React from "react";

const skills = [
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Skills
          </h2>
          
        </div>

        {/* Scrollable Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex md:grid md:grid-cols-4 gap-4 min-w-max md:min-w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="whitespace-nowrap bg-[#008B8B] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition-all text-center min-w-[150px]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
