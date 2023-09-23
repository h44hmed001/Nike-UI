import React from "react";

const ReviewCard = ({ customerName, imgURL, feedback, rating }) => {
  return (
    <div className="flex items-center flex-col">
      <img className="w-[80px] h-[80px] rounded-full " src={imgURL} />
      <p className="text-2xl mt-4 font-bold">{customerName}</p>
      <p className="text-center max-w-lg info-text mt-4 ">{feedback}</p>
      <div className="flex items-center mt-4 gap-3">
        <img width={24} height={24} src="/icons/star.svg" />
        <span className="text-slate-gray font-montserrat">({rating})</span>
      </div>
    </div>
  );
};

export default ReviewCard;
