import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandsCard from './BrandsCard';

const AllBrand = () => {
    const allBrands = useLoaderData();
    return (
        <div className='mt-20'>
            <h2 className="text-4xl pb-2 font-bold text-white">Brands</h2>
            <div className='grid grid-cols-3'>
            {
                allBrands.map(brand => <BrandsCard
                key={brand._id}
                brand={brand}
                ></BrandsCard>)
            }
            </div>
        </div>
    );
};

export default AllBrand;


