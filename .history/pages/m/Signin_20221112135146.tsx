import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function Signin() {
  const [isUser, setIsUser] = useState(false);

  return (
    <div>
      {!isUser ? <Login /> : <CreateAccount />}

      <button onClick={ change}></button>
    </div>
  );
}

export default Signin;
