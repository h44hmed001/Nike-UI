"use client";
import React from "react";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";

import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  return (
    <section className=" min-h-screen xl:flex-row flex-col flex w-full justify-center  max-container  ">
      <div className="pt-28 flex flex-col  justify-center items-start xl:w-2/5  max-xl:padding-x ">
        <p className="text-lg font-montserrat text-coral-red ">
          Our Summer Collection
        </p>
        <h1 className="text-[86px]  mt-10 font-palanquin max-sm:text-[60px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap leading-normal relative z-[999] pr-8 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="sm:max-w-sm  mb-14 text-lg font-montserrat text-slate-gray ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" imageUrl={"/icons/arrow-right.svg"} />
        <div className="flex gap-16 flex-wrap mt-16">
          {statistics.map((stat, i) => (
            <div key={i} className="flex font-palanquin flex-col">
              <h1 className="font-bold max-sm:text-2xl text-4xl">
                {stat.value}
              </h1>
              <p className="text-slate-gray ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:min-h-screen max-xl:py-40 relative flex-1 z-[-1] bg-cover bg-center  flex items-center justify-center bg-hero   ">
        <img
          height={500}
          className="object-contain bigImg relative z-10  "
          width={610}
          src="/images/big-shoe1.png"
        />
        <div className="absolute sm:left-[10%] sm:gap-6 gap-4 flex -bottom-[10%]">
          {shoes.map((shoe, i) => (
            <button key={i}>
              <ShoeCard imgUrl={shoe} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
