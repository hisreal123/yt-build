import React from "react";
import { SlHome } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Menu() {
  return (
    <div className=" p-3 border-r lg:h-screen lg:w-auto w-screen fixed bottom-3 bg-red-300 w-full lg:min-w-[5%]">
      <SlHome className="lg:hidden" />
      <CiSearch className=" lg:hidden" />
      <CgProfile className=" lg:hidden" />

      .lgScreen
    </div>
  );
}

export default Menu;
