import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="w-6/12 mx-auto">
          <img
            src="https://i.ibb.co/ZGcrKf7/1-qd-Fdhb-R00be-Ea-IKDI-WDCw.gif"
            alt=""
          />
        </div>

        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
  // return (
  //   <div>

  //   </div>
  // );
};

export default Errorpage;
