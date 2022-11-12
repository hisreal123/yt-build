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
        <p> New member ? </p>
        <button onClick={changeState} className=' text-blue-300 s'>Create Account </button>
      </div>
    </div>
  );
}

export default Signin;
