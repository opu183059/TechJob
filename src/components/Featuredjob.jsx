import React, { useContext, useState } from "react";
import Featuredjobcard from "./Featuredjobcard";
import { ProductContext } from "../App";

const Featuredjob = () => {
  const jData = useContext(ProductContext);
  let jobSliced = jData.slice(0, 4);
  const [jobshow, setJobshow] = useState(jobSliced);

  const showall = () => {
    setJobshow(jData);
  };

  const showless = () => {
    setJobshow(jobSliced);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-10">Featured Job</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-12">
        {jobshow.map((jdt) => (
          <Featuredjobcard
            key={jdt.id}
            showall={showall}
            jdt={jdt}
          ></Featuredjobcard>
        ))}
      </div>
      <div className="seeAllBtn text-center mb-10">
        {/* show all button  */}
        {jobshow.length == 4 ? (
          <button
            onClick={() => showall()}
            className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-violet-500 hover:bg-indigo-700"
          >
            See all jobs
          </button>
        ) : (
          <button
            onClick={() => showless()}
            className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-violet-500 hover:bg-indigo-700"
          >
            show less
          </button>
        )}
        {/* show all end  */}
      </div>
    </div>
  );
};

export default Featuredjob;
