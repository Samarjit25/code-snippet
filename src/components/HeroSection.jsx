import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "./ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-5 py-25 md:py-32 text-center bg-white from-white via-gray-50 to-gray-100 rounded-xl ">
      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
        Turn Code into Art. <br />
        <span className="text-blue-700">Code Snippet Generator</span>
      </h1>
      {/* Subtext */}
      <div className="max-w-2xl mx-auto mb-10 text-lg text-gray-600">
        <p>
          Paste code, pick a theme, adjust style, preview & download as a
          beautiful image.
        </p>
      </div>
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <NavLink to="/dashboard">
          <Button className="inline-flex text-lg items-center gap-2 rounded-md border border-blue-700 bg-blue-700 px-8 py-5 text-white font-semibold shadow hover:bg-blue-800 hover:border-purple-800 transition">
            Get Started
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
