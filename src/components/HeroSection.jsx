import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "./ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-5 py-25 md:py-32 text-center bg-white from-white via-gray-50 to-gray-100 rounded-xl ">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex gap-3 items-center rounded-full bg-white/80 text-red-700 border border-purple-200 px-4 py-1 shadow-sm">
          <span className="rounded-full bg-red-100 px-3 py-0.5 text-sm font-semibold whitespace-nowrap text-purple-700">
            Live
          </span>
        </div>
      </div>
      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
        Instantly Share & Discover{" "}
        <span className="text-red-700">Code Snippets</span>
      </h1>
      {/* Subtext */}
      <div className="max-w-2xl mx-auto mb-10 text-lg text-gray-600">
        <p>
          Effortlessly save, organize, and share your favorite code snippets.
          Boost productivity and collaborate with developers worldwide.
        </p>
      </div>
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <NavLink to="/dashboard">
          <Button className="inline-flex text-lg items-center gap-2 rounded-md border border-red-700 bg-red-700 px-8 py-5 text-white font-semibold shadow hover:bg-red-800 hover:border-purple-800 transition">
            Start Free
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
