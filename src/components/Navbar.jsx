import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillMediumCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex w-full h-14 justify-between items-center bg-red-800 text-white px-6">
      <div className="flex items-center gap-x-4 ">
        <span>
          <AiFillMediumCircle size={40} />
        </span>
        <span className="flex items-center font-bold">Medical Darpan</span>
      </div>
      <div className="flex text-sm items-center gap-x-6">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Distributors</a>
        <a href="#">Manufactures</a>
        <a href="#">About us</a>
        <a href="#">Blog</a>
      </div>
      <div className="flex text-sm items-center gap-x-6">
        <a href="#">Login</a>
        <a href="#">
          <CgProfile size={28} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
