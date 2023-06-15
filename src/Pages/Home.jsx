import React from "react";
import Hero from "../Components/Home/Hero";
import Pay from "../Components/Home/Pay";
import Degrees from "../Components/Home/Degrees";
import FreeTrial from "../Components/Home/FreeTrial";

const Home = () => {
  return (
    <div>
      <Hero />
      <FreeTrial />
      <Degrees />
      <Pay />
    </div>
  );
};

export default Home;
