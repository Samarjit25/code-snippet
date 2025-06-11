import React from "react";
import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <header className="bg-white text-black py-4 px-5 lg:px-30 flex justify-between items-center shadow-2xs">
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold font-mono tracking-tight">
          CodeSnippet
        </span>
      </NavLink>
      {!isDashboard ? (
        <NavLink
          to="/dashboard"
          className="bg-red-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-800 transition"
        >
          Get Started
        </NavLink>
      ) : (
        <span className="text-sm text-gray-500 font-mono">Hi Stranger</span>
      )}
    </header>
  );
};

export default Header;
