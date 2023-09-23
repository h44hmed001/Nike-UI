import React from "react";

const Button = ({ label, imageUrl, className }) => {
  return (
    <div
      className={` ${
        className ? className : "bg-coral-red px-7 py-3 text-white"
      }  rounded-full gap-2 justify-center cursor-pointer  flex items-center`}
    >
      <span>{label}</span>
      {imageUrl && <img src={imageUrl} alt="" />}
    </div>
  );
};

export default Button;
