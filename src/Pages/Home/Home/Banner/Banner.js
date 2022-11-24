import React from "react";
import banner from "../../../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ready to Buy a Car?</h1>
            <p className="mb-5">
              Here we are provide your dream car at your best price.<br></br>
              In today's world car is very import thing in our daily life.{" "}
              <br /> That's why we take the responsibility to feel up yours in
              your budget.
            </p>
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
