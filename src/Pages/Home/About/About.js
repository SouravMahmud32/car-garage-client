import React from "react";
import about from "../../../assets/about.jpg";

const About = () => {
  return (
    <div className="mt-20">
      <h2 className="text-4xl pb-2 font-bold text-white">About Us</h2>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={about} alt="" />
          <div>
            <h1 className="text-5xl font-bold">Car Garage Family</h1>
            <p className="py-6">
              {" "}
              Car Garage strives to enhance the experience of the collector-car
              enthusiast by publishing high-quality products while serving our
              readers and advertisers with excellence. We do this by creating a
              work environment that empowers, challenges and rewards employees
              who share this commitment.{" "}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
