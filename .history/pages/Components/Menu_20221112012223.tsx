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
    <div className=" p-3 border-r lg:h-screen lg:w-auto w-screen fixed bottom-3 bg-red-300 w-full lg:min-w-[5%]">
      <SlHome className="lg:hidden" />
      <CiSearch className=" lg:hidden" />
      <CgProfile className=" lg:hidden" />

      <div className="lgScreen hidden lg:block">
        <SlHome className="lg:hidden" />
        <HiOutlineBell />
      </div>
    </div>
  );
}

export default Menu;
