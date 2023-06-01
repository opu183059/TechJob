import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between mt-3 items-center">
        <div className="logo mb-3 lg:mb-0">
          <Link to="/">
            <h3 className="text-2xl font-extrabold text-violet-800">
              TECH Job
            </h3>
          </Link>
        </div>
        <div className="menu mb-3 lg:mb-0 font-bold flex flex-col md:text-center md:flex-row items-center">
          <Link to="/" className="mx-2 md:justify-center">
            Home
          </Link>
          <Link to="statistic" className="mx-2">
            Statistics
          </Link>
          <Link to="appliedJob" className="mx-2">
            Applied Jobs
          </Link>
          <Link to="blogs" className="mx-2">
            Blogs
          </Link>
        </div>
        <div className="apply">
          <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l">
            Start Applying
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
