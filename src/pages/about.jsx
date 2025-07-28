// components/pages/About.tsx

import React from "react";
import Profile from "../assets/puja.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 px-6 py-20 md:py-28 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Profile}
            alt="About Me"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl aspect-square"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm <span className="text-[#008B8B] font-semibold">POOJA VERMA </span>, a passionate Full Stack Developer dedicated to crafting modern, efficient, and user-friendly web applications.
            I enjoy turning complex problems into elegant solutions using technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
          </p>
          <p className="text-lg text-gray-600">
            Beyond coding, I love learning new tools, exploring UI/UX design, and contributing to open-source projects. I believe in continuous growth and the power of clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
