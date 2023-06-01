import React from "react";
import Banner from "./Banner";
import Cateegory from "./Cateegory";
import Featuredjob from "./Featuredjob";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Banner></Banner>
      <Cateegory></Cateegory>
      <Featuredjob></Featuredjob>
    </div>
  );
};

export default Home;
