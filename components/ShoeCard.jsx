import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
  return (
    <div
      className={`bg-card sm:w-40 rounded-xl  bg-center bg-cover flex items-center justify-center sm:h-40 `}
    >
      <img width={127} height={103.34} src={imgUrl.thumbnail} />
    </div>
  );
};

export default ShoeCard;
