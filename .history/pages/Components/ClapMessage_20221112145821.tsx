import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdOutlineWavingHand, MdOutlineIosShare } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import Link from "next/link";

function ClapMessage() {
  return (
    <div className="c flex justify-between text-md md:text-xl py-10 border-b-1 border-black">
      <div className="ca flex space-x-5 ">
        <Link href="#">
          <span className="flex items-center cursor-pointer hover:text-black text-gray-600">
            <MdOutlineWavingHand className="mr-2" />
            85
          </span>
        </Link>
        <Link href="#">
          <span className="flex items-center cursor-pointer hover:text-black text-gray-600">
            <BsChat className=" mr-2" />
            20
          </span>
        </Link>
      </div>
      <div className="cb flex space-x-5 text-gray-600 items-center text-md  md:text-xl  ">
        <Link href="#">
          <MdOutlineIosShare />
        </Link>
        <Link href="#">
          <CiBookmarkPlus />
        </Link>
      </div>
    </div>
  );
}

export default ClapMessage;
