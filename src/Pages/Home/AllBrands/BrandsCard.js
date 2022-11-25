import React from 'react';

const BrandsCard = ({brand}) => {
    const {name, image} = brand;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="cars" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandsCard;