import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import IndividualBrandsCard from './IndividualBrandsCard';

const IndividualBrands = () => {
    const individualAllBrands = useLoaderData();
    const [booking, setBooking] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className='p-20'>
            <h2 className="text-4xl text-center pb-3 font-bold text-white">Book Your Dream Car at Beat Deal!</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
            {
                individualAllBrands.map(brand => <IndividualBrandsCard
                key={brand._id}
                brand={brand}
                setBooking={setBooking}
                selectedDate={selectedDate}
                ></IndividualBrandsCard>)
            }
            </div>
            {
                booking &&
                <BookingModal booking={booking} selectedDate={selectedDate} setBooking={setBooking}></BookingModal>
            }
        </div>
    );
};

export default IndividualBrands;