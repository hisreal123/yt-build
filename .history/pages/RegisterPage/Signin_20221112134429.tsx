import React, { useState } from 'react'
import createAccount from './CreateAccount'
import Login from './Login'


function Signin() {

  const [isUser, setIsUser] = useState(false)
  return (
    <div>

      {!isUser ? (
        <L
      )}  
      
    </div>
  )
}

export default Signin
