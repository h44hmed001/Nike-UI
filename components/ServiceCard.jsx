import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-3xl py-16 px-10 sm:w-[350px] sm:min-w-[350px] ">
      <div className="flex bg-coral-red w-10 h-10 rounded-full items-center justify-center">
        <img width={24} height={24} src={imgURL} />
      </div>
      <h1 className="mt-3 text-2xl font-palanquin font-bold">{label}</h1>
      <p className="mt-3 break-words text-slate-gray text-lg font-montserrat ">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
