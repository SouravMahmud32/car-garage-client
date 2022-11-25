import React from 'react';

const IndividualBrandsCard = ({brand}) => {
    const {title, image, name, location, resale, price, used} = brand;
    return (
        <div className='p-4'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img className='lg:w-1/2 h-[300px]' src={image} alt="Shoes" /></figure>
  <div className="card-body items-center">
    <h2 className="card-title">Model: {title}</h2>
    <p>Seller: {name}</p>
    <p>Market Price: ${price}</p>
    <p>Asking Price: <strong>${resale}</strong></p>
    <p>Used: {used}</p>
    <span>Location: {location}</span>
    <div className="card-actions ">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default IndividualBrandsCard;