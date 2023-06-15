import React from "react";
import "./Pay.css";

const Pay = () => {
  return (
    <section>
      <div className="container">
        <h2>Our Subscription</h2>
        <p>A complete Assistance for your Engineering Carrer in Maharastra</p>
        <div className="container-cards">
          <div className="card">
            <div></div>
            <h4>₹ 0</h4>
            <h3>Freeium</h3>
            <p>Get 3 suggestions based on your percentile.</p>
            <p>Get 3 suggestions based on your percentile.</p>
            <p>Get 3 suggestions based on your percentile.</p>
            <p>Get 3 suggestions based on your .</p>

            <button className="btn-1">Explore</button>
          </div>

          <div className="card">
            <div></div>
            <h4>₹ 99</h4>
            <h3>Premium</h3>
            <p>Get 3 suggestions based on your percentile.</p>
            <button className="btn-1">Explore</button>
          </div>
          <div className="card">
            <div></div>
            <h4>₹ 999</h4>
            <h3>Ultra - Premium</h3>
            <p>Get 3 suggestions based on your percentile.</p>
            <button className="btn-1">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
