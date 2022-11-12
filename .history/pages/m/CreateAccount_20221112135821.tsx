import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";

function CreateAccount() {
  return (
    <div>
      <h2> Join Medium </h2>

      <div className="social">
        <Link href=" https://medium.com/m/connect/google?state=google-%7Chttps%3A%2F%2Fmedium.com%2Fnew-story%3Fsource%3Dregister-------------------------------------%7Cregister&source=register-------------------------------------">
          <a>
            <FcGoogle />
          </a>
        </Link>
        <Link href=" https://medium.com/m/connect/google?state=google-%7Chttps%3A%2F%2Fmedium.com%2Fnew-story%3Fsource%3Dregister-------------------------------------%7Cregister&source=register-------------------------------------">
          <a>
            <IoLogoFacebook />
          </a>
        </Link>
        <Link href=" https://medium.com/m/connect/google?state=google-%7Chttps%3A%2F%2Fmedium.com%2Fnew-story%3Fsource%3Dregister-------------------------------------%7Cregister&source=register-------------------------------------">
          <a>
            <FcGoogle />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;
