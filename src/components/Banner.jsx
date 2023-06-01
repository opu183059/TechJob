import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 justify-center items-center">
      <div className="left text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-5">
          One Step Closer
          <br /> To Your
          <br />
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l text-transparent bg-clip-text font-extrabold lg:text-7xl">
            Dream Job
          </span>
        </h1>
        <p className="mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-violet-500 hover:bg-indigo-700">
          Get startted
        </button>
      </div>
      <div className="right">
        <img
          className="w-auto"
          src="https://i.ibb.co/0qT8RXC/P3-OLGJ1-copy-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
