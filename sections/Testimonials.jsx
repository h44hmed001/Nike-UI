import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say
      </h3>
      <p className="max-w-lg info-text text-center mt-6">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex max-lg:flex-col gap-10 mt-20 ">
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
