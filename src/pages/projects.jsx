// components/Projects.tsx

import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Fees Management System",
      description:
        "A full-stack MERN application to manage student fees, track payments, generate reports, and handle course sessions. Built with React, Node.js, MongoDB, Express, and Tailwind.",
      link: "https://github.com/yourusername/fees-management-system", // Update with your GitHub/Deployed link
    },
  ];

  return (
    <section id="projects" className="bg-white px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Projects</h2>
          <p className="text-gray-600 mt-2">Here are some of the projects I’ve worked on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-sky-50 border-l-4 border-[#008B8B] rounded-lg p-6 shadow"
            >
              <h3 className="text-xl font-semibold text-bold">{project.title}</h3>
              <p className="text-bold mt-2">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bold underline text-sm mt-2 inline-block"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
