import React from "react";
import { headerLogo } from "../public/images";
import { navLinks } from "../constants";
import { hamburger } from "../public/icons";
const Navbar = () => {
  return (
    <div className="absolute z-10 py-8 padding-x w-full ">
      <nav className="max-container items-center justify-between flex ">
        <div>
          <img
            width={130}
            height={29}
            src="/images/header-logo.svg"
            alt="Logo"
          />
        </div>
        <ul className="flex max-lg:hidden flex-1 gap-16 justify-center font-montserrat leading-normal items-center">
          {navLinks.map((link, i) => (
            <li className="cursor-pointer " key={i}>
              {link.label}
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden ">
          <img width={25} height={25} src={"/icons/hamburger.svg"} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
