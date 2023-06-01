import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../App";
import { addToDB } from "../utilities/fakeDB";

const JobDetails = () => {
  const { propid } = useParams();
  const featuredData = useContext(ProductContext);
  const category = featuredData.find((category) => category.id == propid);

  const addToDb = (id) => {
    addToDB(id);
  };

  return (
    <div>
      <h1 className="grid content-center justify-center h-64 -mt-8 bg-[url('https://i.ibb.co/Kr0Rk79/Vector.png')] bg-no-repeat bg-left-bottom text-3xl font-extrabold bg-auto">
        Job Details
      </h1>
      <div className="jobDetails w-10/12 mx-auto grid mt-2 grid-cols-1 lg:grid-cols-3 mt-16">
        <div className="leftDetails col-span-2 px-5">
          <p className="mb-5">
            <strong>Company Name: </strong>
            <span className="text-2xl font-bold text-violet-800">
              {category?.company_name}
            </span>
          </p>
          <p className="mb-5">
            <strong>Job Description: </strong>
            {category?.job_description}
          </p>
          <p className="mb-5">
            <strong>Job Responsibility: </strong>
            {category?.job_responsibility}
          </p>
          <p>
            <strong>Educational Requirement: </strong>
          </p>
          <p className="mb-5">{category?.educational_requirements}</p>
          <p>
            <strong>Experiences: </strong>
          </p>
          <p className="mb-10">{category?.experiences} years in this field</p>
        </div>
        <div className="rightDetails">
          <div className="bg-indigo-100 p-5 rounded-lg text-gray-600 font-semibold">
            <h1 className="text-xl font-bold text-slate-800">Job Details</h1>
            <hr className="border-gray-300 my-3" />
            <p className="mb-2 flex">
              <img
                className="w-5 h-5"
                src="https://i.ibb.co/qx4rCB2/Frame.png"
                alt=""
              />
              <span className="font-bold text-slate-800 mx-1">Salary:</span>{" "}
              {category?.salary}k - {category?.salary2}k
            </p>
            <p className="flex">
              <img
                className="w-5 h-5"
                src="https://i.ibb.co/YPz0YwY/Frame-1.png"
                alt=""
              />
              <span className="text-slate-800 font-bold mx-1">Job Title:</span>{" "}
              {category?.job_title}
            </p>
            <br />
            <h1 className="text-xl font-bold text-slate-800">
              Contact Information
            </h1>
            <hr className="border-gray-300 my-3" />
            <p className="mb-2 flex">
              {" "}
              <img
                className="w-5 h-5"
                src="https://i.ibb.co/myGyx4L/Frame-2.png"
                alt=""
              />
              <span className="text-slate-800 font-bold mx-1">Phone:</span>{" "}
              {category?.phone}
            </p>
            <p className="mb-2 flex">
              <img
                className="w-5 h-5"
                src="https://i.ibb.co/87z4y9r/Frame-3.png"
                alt=""
              />
              <span className="text-slate-800 font-bold mx-1">Email:</span>{" "}
              {category?.email}
            </p>
            <p className="flex">
              <img
                className="w-5 h-5"
                src="https://i.ibb.co/hLfZS3V/Frame-4.png"
                alt=""
              />
              <span className="text-slate-800 font-bold mx-1">Address:</span>{" "}
              {category?.location}
            </p>
          </div>
          <button
            onClick={() => addToDb(category.id)}
            className="my-5 px-6 w-full py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
