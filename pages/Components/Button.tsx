import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
interface ButtonProps {
  url?: string;
  name: string;
  addStyle: string;

}
function Button({ url, name, addStyle}: ButtonProps) {
  return (
    <motion.button>
      <Link href={`${url}`}>
        <div className="wrap">
          <a className={addStyle}>{name}</a>
        </div>
      </Link>
    </motion.button>
  );
}

export default Button;
