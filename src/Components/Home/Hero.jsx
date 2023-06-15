import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const location = useNavigate();
  return (
    <div className="Hero">
      <div>
        <h1>Hi Dreamers !</h1>
        <p>
          Finding colleges and careers that are right for you doesn’t have to be
          stressful. Sign in for help planning for life after high school.
        </p>
        <button className="btn-1" onClick={() => location("/login")}>
          Sigin to Your Dashboard
        </button>
      </div>
    </div>
  );
};

export default Hero;
