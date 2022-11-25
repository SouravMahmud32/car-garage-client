import React from "react";
import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { name, image} = brand;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="cars" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions">
            <Link to={`/allbrand/${brand.brands_id}`}>
              <button className="btn btn-primary">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
