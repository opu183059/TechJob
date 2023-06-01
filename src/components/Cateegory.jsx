import React, { useEffect, useState } from "react";
import Categoriescard from "./Categoriescard";

const Cateegory = () => {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setjobs(data.categories));
  }, []);
  // console.log(jobs);
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">Job Category List</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12">
        {jobs.map((job) => (
          <Categoriescard key={job.id} job={job}></Categoriescard>
        ))}
      </div>
    </div>
  );
};
export default Cateegory;
