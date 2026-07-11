// 
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full">
      <div className="bg-blue-900 py-3">
        {/* Heading */}
        <h1 className="text-white text-center text-sm sm:text-lg md:text-xl font-semibold">
          Indian Premier League
        </h1>

        {/* Navigation */}
        <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-5 md:gap-8 lg:gap-10 mt-3 text-white text-xs sm:text-sm md:text-base">
          <Link to="/" className=" bg-blue-950 hover:bg-gray-600 px-2 py-1 rounded">
            MATCHES
          </Link>

          <Link
            to="/Pointstable"
            className=" bg-blue-950 decoration-2 hover:bg-gray-600 px-2 py-1 rounded"
          >
            TABLE
          </Link>

          <Link
            to="/News"
            className=" bg-blue-950 hover:bg-gray-600 px-2 py-1 rounded"
          >
            NEWS
          </Link>

          <Link
            to="/STATS"
            className=" bg-blue-950 hover:bg-gray-600 px-2 py-1 rounded"
          >
            STATS
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Navbar;