import React, { useContext, useEffect, useState } from "react";
import AppliedJovsCard from "./AppliedJovsCard";
import { getData } from "../../utilities/fakeDB";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";

const Appliedjob = () => {
  const [mainData, setmainData] = useState([]);
  const [cart, setCart] = useState([]);
  const jobsData = useContext(ProductContext);
  // console.log(jobsData);
  useEffect(() => {
    const jobData = getData();
    let newArray = [];
    for (const id in jobData) {
      const foundData = jobsData.find((product) => product.id == id);
      if (foundData) {
        newArray.push(foundData);
      }
    }
    setCart(newArray);
    setmainData(newArray);
  }, []);

  // console.log(mainData);

  const [remote, setremote] = useState([]);
  // sort remote
  const sortRemote = () => {
    const remote = mainData.filter(
      (category) => category.remote_or_onsite === "Remote"
    );
    setCart(remote);
  };
  // sort onsite
  const sortOnsite = () => {
    const onsite = mainData.filter(
      (category) => category.remote_or_onsite === "Onsite"
    );
    setCart(onsite);
  };

  // clear the page function
  const clear = () => {
    localStorage.clear();
    let newArray = [];
    setCart(newArray);
  };

  return (
    <div>
      <h1 className="grid content-center justify-center h-64 -mt-8 bg-[url('https://i.ibb.co/Kr0Rk79/Vector.png')] bg-no-repeat bg-left-bottom text-3xl font-extrabold bg-auto">
        Applied Jobs
      </h1>
      <div className="w-9/12 mx-auto mt-8">
        {localStorage.getItem("jobID") ? (
          <div className="butoonss text-right mb-5">
            <button
              onClick={() => sortRemote()}
              className="px-6 w-28 py-3 me-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l"
            >
              Remote
            </button>
            <button
              onClick={() => sortOnsite()}
              className="px-6 w-28 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l"
            >
              Onsite
            </button>
          </div>
        ) : (
          " "
        )}

        {cart.map((job) => (
          <AppliedJovsCard key={job.id} job={job}></AppliedJovsCard>
        ))}
      </div>
      <div className="grid content-center justify-center mb-10">
        {localStorage.getItem("jobID") ? (
          <button
            onClick={() => clear()}
            className="px-6 w-40 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-red-600 to-red-700 hover:bg-gradient-to-l"
          >
            Clear All
          </button>
        ) : (
          <div className="text-center font-mono">
            <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              You have not applied yet
            </h2>
            <p className=" text-xl mt-2">
              visit{" "}
              <Link
                to={"/"}
                className=" text-blue-500 font-bold hover:text-blue-800 hover:underline"
              >
                homepage
              </Link>{" "}
              to see jobs details
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appliedjob;
