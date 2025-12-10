// components/Home.tsx

import React from "react";
import { Button } from "@/components/ui/button";
import Profile from "../assets/puja.jpg";
import Resume from "../assets/resume.pdf";
const Home = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 md:px-16"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm <span className="text-[#008B8B]">Pooja verma</span>
          </h1>
          <p className="text-gray-600 text-lg">
            I’m a Web Developer who loves building beautiful and
            functional web applications. Let’s build something amazing!
          </p>
          <Button className="rounded-full px-6 py-2 text-white bg-[#008B8B]hover:bg-blue-700 transition">
            <a href={Resume} >Resume</a>
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Profile}
            alt="Coding Illustration"
           className="rounded-full shadow-lg w-60 h-60 md:w-64 md:h-64 object-cover object aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
