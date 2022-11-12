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

      <div className="social -translate-y-5 space-y-3 relative">
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

      <div className="btn flex  text-sm mt-10 text-gray-600 font-medium  ">
        <p> Already have an account? </p>
        <button
          onClick={changeState}
          className="ml-1 text-md text-green-600 font-bold hover:text-green-800 "
        >
          Sign In
        </button>
      </div>

      <div className="notice text-center relative w-[60%] mx-auto ">
        <p className=" relative">
          Click “Sign Up” to agree to Medium’s
          <Link href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=register-------------------------------------">
            <a href=""></a>
          </Link>
          and acknowledge that Medium’s
          <Link href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9?source=register-------------------------------------">
            <a> Privacy Policy</a>
          </Link>
          Privacy Policy applies to you.
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
