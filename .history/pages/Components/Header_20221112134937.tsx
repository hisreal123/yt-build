import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

interface HeaderProps {
  bgColor?: string;
}

export default function Header({ bgColor }: HeaderProps) {
  return (
    <div
      className={`${bgColor} && "bg-[#FFC017]"
      border-b-[.1rem] border-b-black fixed w-screen top-0 z-100`}
    >
      <div className="flex p-5 justify-between  items-center  md:max-w-6xl md:mx-auto relative">
        <div className="">
          <Link href="/">
            <img
              className="h-6  cursor-pointer "
              alt="Home Page and Logo"
              src="https://seeklogo.com/images/M/medium-logo-33836F45D2-seeklogo.com.png"
            />
          </Link>
        </div>

        <div className="flex space-x-8">
          <ul className="hidden md:inline-flex items-center space-x-6 text-sm ">
            <Link href="#">
              <li className="cursor-pointer  text-gray-900 hover:text-black transition-all duration-200">
                Out story
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer  text-gray-900 hover:text-black transition-all duration-200">
                Membership
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer  text-gray-900 hover:text-black transition-all duration-200">
                Write
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer  text-gray-900 hover:text-black transition-all duration-200">
                Sign in
              </li>
            </Link>
          </ul>

          <Link href="/Signin">
            <motion.button
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 1 }}
              type="submit"
              className="bg-gray-900 hover:bg-black  text-white font-bold rounded-full px-2 py-2 text-sm "
            >
              Get started
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
