import { motion } from "framer-motion";
import React from "react";
import { AiOutlineTwitter, AiTwotoneCopy } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Tippy from "@tippyjs/react";

interface SocialsProps {
  addStyle: string;
}

function Socials({ addStyle }: SocialsProps) {
  return (
    <div className={`${addStyle}`}>
      <Tippy content={<span className="bg-gray-900 text-white text-xs  px-2 py-1 rounded-md "> Twitter </span>}>
      <motion.p
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6 }}
      >
          <AiOutlineTwitter className="cursor-pointer hover:text-gray-500 transition-all duration-100 " />
      </motion.p>
        </Tippy>
      <motion.p
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <MdFacebook className="cursor-pointer hover:text-gray-500 transition-all duration-100 " />
      </motion.p>
      <motion.p
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <RiInstagramFill className="cursor-pointer hover:text-gray-500 transition-all duration-100 " />
      </motion.p>
      <motion.p
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <AiTwotoneCopy className="cursor-pointer hover:text-gray-500 transition-all duration-100 " />
      </motion.p>
    </div>
  );
}

export default Socials;
