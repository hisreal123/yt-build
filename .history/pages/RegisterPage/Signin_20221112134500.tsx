import React, { useState } from "react";
import     <div className lg:p-0  border-r lg:h-screen lg:w-auto  fixed lg:block bottom-0 bg-white z-10 w-full lg:min-w-[5%] lg:shadow-0  ">
 from "./CreateAccount";
import Login from "./Login";

function Signin() {
  const [isUser, setIsUser] = useState(false);
  return <div>{!isUser ? <Login /> : <    <div className lg:p-0  border-r lg:h-screen lg:w-auto  fixed lg:block bottom-0 bg-white z-10 w-full lg:min-w-[5%] lg:shadow-0  ">
 />}</div>;
}

export default Signin;
