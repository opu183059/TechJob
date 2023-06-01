import React from "react";
import { Link } from "react-router-dom";

const Featuredjobcard = (props) => {
  let propid = props.jdt.id;
  // let url = propid;
  return (
    <div>
      <div className="shadow-card flex flex-col transition duration-200 rounded-xl border-2 border-slate-200 hover:bg-indigo-50">
        <div className="ms-6 mt-6 ">
          <img
            className="w-64 h-24 rounded-lg p-3"
            src={props.jdt.company_logo}
            alt="card image"
          />
        </div>
        <div className="text-secondary flex-1 p-6">
          <h4 className="font-medium">{props.jdt.job_title}</h4>
          <p className="opcacity-60 mb-3">{props.jdt.company_name}</p>
          <div className="fetureBtn">
            <button className="border-solid px-3 py-1 text-indigo-500 hover:text-white border-2 border-indigo-300 transition duration-200 rounded-md shadow-md hover:bg-blue-700">
              {props.jdt.remote_or_onsite}
            </button>
            <button className="ml-3 border-solid px-3 py-1 text-indigo-500 hover:text-white border-2 border-indigo-300 transition duration-200 rounded-md shadow-md hover:bg-blue-700">
              {props.jdt.fulltime_or_parttime}
            </button>
          </div>
          <div className="featureLoc flex flex-row justify-between text-gray-500 text-sm my-3">
            <p className="flex flex-row">
              <img
                src="https://i.ibb.co/hLfZS3V/Frame-4.png"
                alt=""
                className="me-1"
              />{" "}
              {props.jdt.location}
            </p>
            <p className="flex flex-row">
              <img
                src="https://i.ibb.co/qx4rCB2/Frame.png"
                alt=""
                className="me-1"
              />{" "}
              Sallary:
              {props.jdt.salary}k -{props.jdt.salary2}k
            </p>
          </div>
          <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-violet-500 hover:bg-indigo-700">
            {/* <a href={propid}>View details</a> */}
            <Link to={"/job/" + propid}>View details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featuredjobcard;
