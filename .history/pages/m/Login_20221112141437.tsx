import React from "react";



interface CreateAccountProps {
  changeState: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
function Login() {
  return <div>Login

<div className="btn">
        <button
          onClick={changeState}
          className="text-blue-800 hover:text-blue-900 "
        >
          Create Account
        </button>
      </div>
  </div>;
}

export default Login;
