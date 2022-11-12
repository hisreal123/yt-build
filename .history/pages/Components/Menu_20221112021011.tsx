import React from "react";
import { SlHome } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { HiOutlineBell } from "react-icons/hi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

function Menu() {
  return (
    <div className="p-3 lg:p-0  border-r lg:h-screen lg:w-auto  fixed lg:block bottom-0 bg-white z-10 w-full lg:min-w-[5%] lg:shadow-0  ">
      <div className="mobile flex items-center justify-between mx-auto lg:hidden max-w-[80%] ">
        <SlHome className="   text-2xl text-gray-400 hover:text-gray-800 cursor-pointer ml-3 " />
        <CiSearch className="  text-2xl text-gray-400 hover:text-gray-800 cursor-pointer " />
        <CgProfile className="  text-2xl text-gray-400 hover:text-gray-800 cursor-pointer mr-3 " />
      </div>

      <div className="lgScreen hidden lg:flex lg:flex-col pt-10  justify-between items-center  relative h-full bg-red-300 text-2xl ">
        <img
          src="../assets/medium black logo.png"
          alt=" Got to home "
          className="h-10 w-10 "
        />

        <div className="in space-y-10 -mt-20">
        />
          <HiOut/>
          <BsFillBookmarksFill />
          <CiViewList cl" />
          <div className="inA pt-10 border-t border-gray-400 ">
            <TfiWrite cl" />
          </div>
        </div>

        <div className="nothing"></div>
      </div>
    </div>
  );
}

export default Menu;
