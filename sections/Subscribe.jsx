import React from "react";
import Button from "../components/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Subscribe = () => {
  return (
    <div className="max-container flex max-lg:flex-col justify-between gap-16 max-lg:gap-10 ">
      <h3 className="text-4xl max-lg:text-center font-palanquin flex-[0.8] font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="flex  flex-1 items-center justify-center w-full">
        <div className="flex rounded-full justify-between flex-1 p-4 pl-6  border border-slate-gray  ">
          <input
            className="w-[85%]  rounded-full lg:placeholder:info-text outline-none  "
            placeholder="nike@subscribe.com"
          />

          <Button
            className={
              "w-fit px-3 items-center text-end  justify-end py-2 flex  bg-coral-red text-white   "
            }
            label={<SendOutlinedIcon style={{ width: 20, height: 20 }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
