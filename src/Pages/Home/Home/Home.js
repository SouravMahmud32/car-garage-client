import React from 'react';
import About from '../About/About';
import AllBrand from '../AllBrands/AllBrand';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBrand></AllBrand>
            <About></About>
        </div>
    );
};

export default Home;