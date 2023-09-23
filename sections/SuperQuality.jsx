import React from "react";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div className="flex max-lg:flex-col justify-between items-center max-container ">
      <div className="flex flex-1 flex-col">
        <h1 className="lg:max-w-lg text-4xl font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className="lg:max-w-lg mt-4 info-text text-slate-gray">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg mt-6 info-text text-slate-gray">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 w-fit">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img width={570} height={522} src="/images/shoe8.svg" />
      </div>
    </div>
  );
};

export default SuperQuality;
