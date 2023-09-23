import React from "react";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <div className="flex max-xl:flex-col-reverse gap-10 items-center max-container justify-between ">
      <div className="flex-1">
        <img
          className="object-contain w-full"
          width={773}
          height={687}
          src="/images/offer.svg"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="lg:max-w-lg text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className=" mt-4 info-text text-slate-gray">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="lg:max-w-lg mt-6 info-text text-slate-gray">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex mt-11 flex-wrap gap-4">
          <Button label="View Details" />
          <Button
            className="bg-white border text-slate-gray border-slate-gray"
            label="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
