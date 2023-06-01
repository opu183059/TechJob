import React from "react";

const Categoriescard = (props) => {
  // console.log(props.job.logo);
  return (
    <div>
      <div className="shadow-card flex flex-col rounded-xl bg-indigo-50">
        <div className="ms-6 mt-6 ">
          <img
            className="w-auto rounded-lg bg-indigo-100 p-3"
            src={props.job.logo}
            alt="card image"
          />
        </div>
        <div className="text-secondary flex-1 p-6">
          <a href="#">
            <h4 className="font-medium">{props.job.name}</h4>
          </a>
          <p className="opcacity-60 mb-3">{props.job.jobs} jobs available</p>
        </div>
      </div>
    </div>
  );
};

export default Categoriescard;
