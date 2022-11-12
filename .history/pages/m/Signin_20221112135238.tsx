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

      <div className="notify">
        <button onClick={changeState}>Create Account  </button>
      </div>
    </div>
  );
}

export default Signin;
