import React, { useRef } from "react";
import { useUserContext } from "../config/BavariaUserContext";
import "./bavaria.modules.css";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <bavariaform form className="bavariaform">
      <title> Login to Bavaria</title>
      <div form className="contentFull">
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <button onClick={forgotPasswordHandler}>Forgot Password?</button>
      </form>
      </div>
    </bavariaform>
  );
};

export default Signin;