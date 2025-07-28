// components/Education.tsx

import React from "react";

const educationData = [
  
  {
    degree: "High School",
    institution: "K.V.N Inter College",
    year: "2019 - 2020",
    
  },
  {
    degree: "Intermidate",
    institution: "K.V.N Inter College",
    year: "2021- 2022",
    
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "VISION COLLEGE OF MANAGEMET",
    year: "2022 - 2025",
    
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gray-50 px-6 py-20 md:py-28 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-">Education</h2>
          <p className="text-bold-600 mt-2">A brief of my academic background</p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-xl shadow-md p-6 md:p-8 border-l-4 border-[#008B8B]"
            >
              <h3 className="text-xl font-semibold text-bold">{edu.degree}</h3>
              <p className="text-bold font-medium">{edu.institution}</p>
              <p className="text-bold text-sm italic">{edu.year}</p>
              <p className="text-bold mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
