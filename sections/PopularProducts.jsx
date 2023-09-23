import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <div className="max-container">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red ">Popular</span> Products
        </h1>
        <span className="lg:max-w-lg  mt-2 font-montserrat text-slate-gray ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </span>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2  lg:grid-cols-4 ">
        {products.map((product) => (
          <PopularProductCard
            price={product.price}
            imgUrl={product.imgURL}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
