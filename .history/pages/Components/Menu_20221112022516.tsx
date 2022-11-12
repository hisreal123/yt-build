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
    <div className="py-3 lg:p-0  border-r lg:h-screen lg:w-auto  fixed lg:block bottom-0 bg-red-200 z-10 w-full lg:min-w-[5%] lg:shadow-0  ">
      <div className="mobile flex items-center justify-between mx-auto lg:hidden max-w-[80%]  ">
        <SlHome className="   text-2xl text-gray-400 hover:text-gray-800 cursor-pointer ml-3 " />
        <CiSearch className="  text-2xl text-gray-400 hover:text-gray-800 cursor-pointer " />
        <CgProfile className="  text-2xl text-gray-400 hover:text-gray-800 cursor-pointer mr-3 " />
      </div>

      <div className="lgScreen hidden lg:flex lg:flex-col pt-8  justify-between items-center  relative h-full text-2xl ">
        <img
          src="../assets/medium black logo.png"
          alt=" Got to home "
          className="h-10 w-10 "
        />

        <div className="in space-y-10 -mt-20">
          <SlHome className=" cursor-pointer text-gray-500 hover:text-gray-700 " />
          <HiOutlineBell className=" cursor-pointer text-gray-500 hover:text-gray-700 " />
          <BsFillBookmarksFill className=" cursor-pointer text-gray-500 hover:text-gray-700 " />
          <CiViewList className="cursor-pointer  text-gray-500 hover:text-gray-700 " />
          <div className="inA pt-10 border-t border-gray-400 ">
            <TfiWrite className=" cursor-pointer text-gray-500 hover:text-gray-700 " />
          </div>
        </div>

        <div className="nothing"></div>
      </div>
    </div>
  );
}

export default Menu;
