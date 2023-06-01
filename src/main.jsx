import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Statistic from "./components/Statistic/Statistic";
import Appliedjob from "./components/Appliedjob/Appliedjob";
import Blog from "./components/Blog/Blog";
import Errorpage from "./components/Errorpage";
import JobDetails from "./components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
    loader: () => fetch("/cercular.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "job/:propid",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/appliedJob",
        element: <Appliedjob></Appliedjob>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      // {
      //   path: "*",
      //   element: <Errorpage></Errorpage>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
