import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { data: advirtise = [], isLoading } = useQuery({
        queryKey: ["advirtise"],
        queryFn: async () => {
          const res = await fetch("https://y-lovat-alpha.vercel.app/advirtise");
          const data = res.json();
          return data;
        },
      });

      if (isLoading) {
        return <Loading></Loading>;
      }

    return (
        <div>
      <div>
        <h3 className="text-3xl mb-5">My Products</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {advirtise &&
                advirtise?.map((booking, i) => (
                  <tr key={advirtise._id}>
                    <th>{i + 1}</th>
                    <td>{advirtise.name}</td>
                    <td>{advirtise.phone}</td>
                    <td>{advirtise.bookingDate}</td>
                    <td>{advirtise.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default MyProducts;