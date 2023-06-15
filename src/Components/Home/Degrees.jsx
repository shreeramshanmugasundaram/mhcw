import React from "react";

import "./Degrees.css";
import { useNavigate } from "react-router-dom";
const Degrees = () => {
  const location = useNavigate();
  return (
    <div>
      <section>
        <div className="container">
          <h2>Engineering Degrees</h2>
          <p>
            Different kind of Engineering Degrees available in Maharastra and
            the list colleges.
          </p>

          <div className="degree-cards">
            <div className="card">
              <h3>Computer Engineering</h3>
              <p>Number of College: 58</p>
            </div>

            <div className="card">
              <h3>Electrical Engineering</h3>
              <p>Number of College : 58</p>
            </div>

            <div className="card">
              <h3>Civil Engineering</h3>
              <p>Number of College : 58</p>
            </div>
            <div className="card">
              <h3>Mechanical Engineering</h3>
              <p>Number of College: 58</p>
            </div>

            <div className="card">
              <h3>Aerospace Engineering</h3>
              <p>Number of College : 58</p>
            </div>

            <div className="card">
              <h3>AI and Data Science Engineering</h3>
              <p>Number of College : 58</p>
            </div>
          </div>
          <button
            className="btn-2"
            onClick={() => {
              location("/explore");
            }}
          >
            Know More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Degrees;
