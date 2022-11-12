import React, { useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { CiBookmarkPlus } from "react-icons/ci";

function Email() {
  //   const form = useRef();

  //   const sendEmail = (e) =>{
  //     e.preventDefault();

  //     emailjs.sendForm('service_u0ivftb', )
  //   }
  return (
    <div className="py-5 ">
      {/* <form action="" method="post" className="space-y-10">
        <div className="wrap">
          <label htmlFor="Emal" className="font-bold text-xl text-gray-800 ">
            Get an email whenever Dave Troy publishes.
          </label>
          <input
            placeholder=" Your Email "
            type="email"
            name=""
            id=""
            className=" text-gray-900 mt-2 pt-2  w-full text-sm border-b-[1px] border-black active:border-0 focus:outline-none"
          />
        </div>

        <div className="ab md:hidden flex items-center space-x-2 md:space-x-0 text-xl text-gray-700 border border-gray-400 relaive w-fit px-4 py-1 rounded-full  hover:border-gray-600 md:border-0">
          <CiBookmarkPlus />
          <span className=" md:hidden">Save </span>
        </div>
      </form> */}

      <p className=" mt-5 md:mt-2   text-[10px] md:text-md leading-3">
        By signing up, you will create a Medium account if you don’t already
        have one. Review our Privacy Policy for more information about our
        privacy practices.
      </p>
    </div>
  );
}

export default Email;
