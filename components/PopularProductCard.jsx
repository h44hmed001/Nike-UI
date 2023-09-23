import React from "react";

const PopularProductCard = ({ name, imgUrl, price }) => {
  return (
    <div className="flex flex-col w-full">
      <img className="w-[280px] h-[280px] " src={imgUrl} />
      <div className="mt-8">
        <div className="flex text-slate-gray items-center font-montserrat gap-3">
          <img width={24} height={24} src="/icons/star.svg" />
          <span className="text-xl">(4.9)</span>
        </div>
        <div className="flex mt-2  flex-col">
          <h3 className="font-semibold leading-normal text-xl">{name}</h3>
          <span className="text-coral-red font-semibold font-montserrat ">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
