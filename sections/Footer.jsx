import React from "react";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="max-container">
      <div className="text-white flex justify-between gap-20 items-start max-lg:flex-col ">
        <div className="flex flex-col">
          <img width={150} height={46} src="/images/footer-logo.svg" />
          <p className="mt-6 font-montserrat leading-[1.7] sm:max-w-sm ">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex mt-8 gap-4">
            {socialMedia.map((social, i) => (
              <div
                key={i}
                className="bg-white w-12 h-12 flex items-center justify-center rounded-full "
              >
                <img width={30} height={30} src={social.src} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}

        <div className="flex lg:gap-10 gap-20 flex-1 justify-between flex-wrap">
          {footerLinks.map((link, i) => (
            <div>
              <h1 className="text-3xl">{link.title}</h1>
              <div className="flex cursor-pointer mt-5 flex-col gap-3">
                {link.links.map((l, i) => (
                  <p className="text-lg font-montserrat">{l.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col items-center">
        <div className="text-white flex items-center  gap-3 text-lg font-montserrat">
          <img src="/icons/copyright-sign.svg" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="text-white flex items-center  gap-3 text-lg font-montserrat">
          Terms & Condition
        </p>
      </div>
    </div>
  );
};

export default Footer;
