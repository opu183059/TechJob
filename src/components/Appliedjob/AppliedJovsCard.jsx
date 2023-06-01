import React from "react";
import { Link } from "react-router-dom";

const AppliedJovsCard = (props) => {
  let propid = props.job.id;
  return (
    <div className="rounded border-2 border-gray-300 mb-10 grid grid-cols-1 lg:grid-cols-10">
      <div className="cardImg grid content-center justify-center col-span-3">
        <img
          src={props.job.company_logo}
          alt=""
          className="max-w-72 max-h-40 p-3 rounded-xl mx-auto lg:mx-0"
        />
      </div>
      <div className="JobCardDetails col-span-7 lg:flex justify-between">
        <div className="text text-center lg:text-left">
          <div className="text-secondary flex-1 p-5 lg:p-3">
            <h4 className="font-medium">{props.job.job_title}</h4>
            <p className="opcacity-60 mb-3 text-gray-500">
              {props.job.company_name}
            </p>
            <div className="fetureBtn">
              <button className="border-solid px-3 py-1 text-indigo-500 hover:text-white border-2 border-indigo-300 transition duration-200 rounded-md shadow-md hover:bg-blue-700">
                {props.job.remote_or_onsite}
              </button>
              <button className="ml-3 border-solid px-3 py-1 text-indigo-500 hover:text-white border-2 border-indigo-300 transition duration-200 rounded-md shadow-md hover:bg-blue-700">
                {props.job.fulltime_or_parttime}
              </button>
            </div>
            <div className="featureLoc flex flex-row justify-between text-gray-500 text-sm my-3">
              <p className="flex flex-row me-5">
                <img
                  src="https://i.ibb.co/hLfZS3V/Frame-4.png"
                  alt=""
                  className="me-1"
                />
                {props.job.location}
              </p>
              <p className="flex flex-row">
                <img
                  src="https://i.ibb.co/qx4rCB2/Frame.png"
                  alt=""
                  className="me-1"
                />{" "}
                Sallary: {props.job.salary}k - {props.job.salary2}k
              </p>
            </div>
          </div>
        </div>
        <div className="appliedbtn flex items-center mx-5 lg:mx-0 mb-3 lg:mb-0 lg:me-3">
          <button className="px-6 w-full py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l">
            <Link to={"/job/" + propid}>View details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJovsCard;
