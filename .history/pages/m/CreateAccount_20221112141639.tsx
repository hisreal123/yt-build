import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";

interface CreateAccountProps {
  changeState: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
function CreateAccount({ changeState }: CreateAccountProps) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h2 className=" -translate-y-32 text-3xl font-medium  ">Join Medium.</h2>

      <div className="social -translate-y-10 space-y-3 relative">
        <Link href=" https://medium.com/m/connect/google?state=google-%7Chttps%3A%2F%2Fmedium.com%2Fnew-story%3Fsource%3Dregister-------------------------------------%7Cregister&source=register-------------------------------------">
          <a className="w-full  space-x-2 flex  items-center py-2 px-4 border border-gray-400   rounded-full text-gray-600 hover:text-gray-800 hover:border-gray-600">
            <FcGoogle />
            <p> Sign up with Google</p>
          </a>
        </Link>
        <Link href=" https://medium.com/m/connect/google?state=google-%7Chttps%3A%2F%2Fmedium.com%2Fnew-story%3Fsource%3Dregister-------------------------------------%7Cregister&source=register-------------------------------------">
          <a className=" w-full space-x-2 flex  items-center py-2 px-4 border border-gray-400   rounded-full text-gray-600 hover:text-gray-800 hover:border-gray-600">
            <IoLogoFacebook />
            <p> Sign up with Facebook</p>
          </a>
        </Link>
        <Link href=" https://medium.com/m/connect/google?state=google-%7Chttps%3A%2F%2Fmedium.com%2Fnew-story%3Fsource%3Dregister-------------------------------------%7Cregister&source=register-------------------------------------">
          <a className="w-full space-x-2 flex  items-center py-2 px-4 border border-gray-400  rounded-full text-gray-600 hover:text-gray-800 hover:border-gray-600">
            <BsEnvelope />
            <p> Sign up with Email</p>
          </a>
        </Link>
      </div>

      <div className="btn flex  text-sm ">
        <p> Already have an account? </p>
        <button
          onClick={changeState}
          className="text-blue-800 hover:text-blue-900 "
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
