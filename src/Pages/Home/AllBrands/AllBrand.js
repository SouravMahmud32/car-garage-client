import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import BrandsCard from "./BrandsCard";

const AllBrand = () => {
  const { data: allBrands = [], isLoading } = useQuery({
    queryKey: ["brandsCollection"],
    queryFn: async () =>
      await fetch("https://y-lovat-alpha.vercel.app/brandsCollection").then(
        async (res) => await res.json()
      ),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-20">
      <h2 className="text-4xl pb-2 text-center font-bold text-white">Brands</h2>
      <div className="grid grid-cols-3">
        {allBrands.map((brand) => (
          <BrandsCard key={brand._id} brand={brand}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default AllBrand;
