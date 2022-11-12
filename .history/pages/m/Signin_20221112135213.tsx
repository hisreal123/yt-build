import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function Signin() {
  const [isUser, setIsUser] = useState(false);

  const changeState = () => {
    setIsUser(!isUser);
  };
  
  return (
    <div>
      {!isUser ? <Login /> : <CreateAccount />}

      <button onClick={changeState}></button>
    </div>
  );
}

export default Signin;
