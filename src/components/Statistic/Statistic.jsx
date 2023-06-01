import React from "react";
// import "./styles.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { ComposedChart, Line, Bar, Legend } from "recharts";

const Statistic = () => {
  const data = [
    {
      id: 1,
      name: "Assignment 1",
      mark: 60,
      out_of: 60,
    },
    {
      id: 2,
      name: "Assignment 2",
      mark: 57,
      out_of: 60,
    },
    {
      id: 3,
      name: "Assignment 3",
      mark: 60,
      out_of: 60,
    },
    {
      id: 4,
      name: "Assignment 4",
      mark: 60,
      out_of: 60,
    },
    {
      id: 5,
      name: "Assignment 5",
      mark: 56,
      out_of: 60,
    },
    {
      id: 6,
      name: "Assignment 6",
      mark: 58,
      out_of: 60,
    },
    {
      id: 7,
      name: "Assignment 7",
      mark: 60,
      out_of: 60,
    },
    {
      id: 8,
      name: "Assignment 8",
      mark: 60,
      out_of: 60,
    },
  ];
  return (
    <div className="grid justify-center mt-8">
      <h1 className="grid content-center justify-center h-64 -mt-8 bg-[url('https://i.ibb.co/Kr0Rk79/Vector.png')] bg-no-repeat bg-left-bottom text-3xl font-extrabold bg-auto">
        Assignment Marks
      </h1>
      <div>
        <AreaChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>

        <ComposedChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 0,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="out_of" barSize={1} fill="#413ea0" />
          <Line type="monotone" dataKey="mark" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistic;
