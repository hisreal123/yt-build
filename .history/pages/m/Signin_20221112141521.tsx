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
      {!isUser ? (
        <Login changeState={changeState} />
      ) : (
        <CreateAccount changeState={changeState} />
      )}
    </div>
  );
}

export default Signin;
