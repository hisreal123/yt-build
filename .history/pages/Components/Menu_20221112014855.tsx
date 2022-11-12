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
    <div className="p-3 border-r lg:h-screen lg:w-auto sm:w-screen fixed bottom-0 bg-white z-20 w-full lg:min-w-[5%] shadow-lg lg:shadow-0  ">
      <div className="mobile flex items-center justify-between mx-auto lg:hidden max-w-[80%] ">
        <SlHome className=" text-xl text-gray-400 hover:text-gray-800 cursor-pointer ml-3 " />
        <CiSearch className="  text-xl text-gray-400 hover:text-gray-800 cursor-pointer " />
        <CgProfile className="  text-xl text-gray-400 hover:text-gray-800 cursor-pointer mr-3 " />
      </div>

      <div className="lgScreen hidden lg:flex lg:flex-col">
        <SlHome className="lg:hidden" />
        <HiOutlineBell />
        <BsFillBookmarksFill />
        <CiViewList />
        <TfiWrite />
      </div>
    </div>
  );
}

export default Menu;
