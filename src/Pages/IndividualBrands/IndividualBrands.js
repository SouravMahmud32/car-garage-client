import { useLoaderData } from 'react-router-dom';
import IndividualBrandsCard from './IndividualBrandsCard';

const IndividualBrands = () => {
    const individualAllBrands = useLoaderData();

    return (
        <div className='p-20'>
            <h2 className="text-4xl pb-3 font-bold text-white">Book Your Dream Car at Beat Deal!</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
            {
                individualAllBrands.map(brand => <IndividualBrandsCard
                key={brand._id}
                brand={brand}
                ></IndividualBrandsCard>)
            }
            </div>
        </div>
    );
};

export default IndividualBrands;