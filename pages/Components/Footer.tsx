import Link from "next/link";
import React from "react";
Link;
function Footer() {
  return (
    <div className="px-10 py-3 bg-black text-white lg:hidden ">
      <div className=" border-b-[.1px] border-b-gray-600 pb-6">
        <Link href="/">
          <img
            className="h-10 cursor-pointer ml-0 mb-4"
            alt="Home Page and Logo"
            src="https://miro.medium.com/max/8976/1*Ra88BZ-CSTovFS2ZSURBgg.png"
          />
        </Link>

        <nav>
          <ul className=" flex text-sm  space-x-5">
            <li>
              <Link href="#">
                <a className="">About</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="">Help</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="">Terms</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="">Privacy</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="fBotom md:hidden">
        <h2 className="font-bold text-md my-5"> Get the Medium app </h2>

        <div className="a flex space-x-3">
          <Link href="https://itunes.apple.com/app/medium-everyones-stories/id828256236?pt=698524&mt=8&ct=home&source=home-------------------------------------">
            <img
              className="h-10 cursor-pointer ml-0 mb-4"
              alt="Home Page and Logo"
              src="https://miro.medium.com/max/270/1*Crl55Tm6yDNMoucPo1tvDg.png"
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.medium.reader&source=home-------------------------------------">
            <img
              className="h-10 cursor-pointer ml-0 mb-4"
              alt="Home Page and Logo"
              src="https://miro.medium.com/max/270/1*W_RAPQ62h0em559zluJLdQ.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
