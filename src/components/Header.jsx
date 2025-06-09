import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-black py-4 px-5 lg:px-30 flex justify-between items-center shadow-2xs">
      {/* Left: Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold font-mono tracking-tight">
          CodeSnippet
        </span>
      </NavLink>
      {/* Right: Get Started button */}
      <NavLink
        to="/dashboard"
        className="bg-red-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
      >
        Get Started
      </NavLink>
    </header>
  );
};

export default Header;
