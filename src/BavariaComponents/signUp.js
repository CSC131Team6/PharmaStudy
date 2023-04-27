import React, { useRef } from "react";
import { useUserContext } from "../config/BavariaUserContext";
import "./bavaria.modules.css";

const Signup = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const cfmpsdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    const confirmPassword = cfmpsdRef.current.value;
    if (password === confirmPassword)
    {
        if (email && password) registerUser(email, password);
    }
  };

  return (
    <bavariaform className = "bavaria">
      <div form className="contentFull">
      <h2> New Bavaria User</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <input placeholder="Confirm Password" type="confirmPassword" ref={cfmpsdRef} />
          <input placeholder="Confirmation Code" />
          <button type="submit">Register</button>
        </form>
      </div>
    </bavariaform>
  );
};

export default Signup;