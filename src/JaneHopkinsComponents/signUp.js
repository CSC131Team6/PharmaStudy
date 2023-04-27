import React, { useRef } from "react";
import { useUserContext } from "../config/JHUserContext";
import "./janehopkins.modules.css";

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
    <jhform className = "jhform">
      <div form className="contentFull">
      <h2> New Jane Hopkins User</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <input placeholder="Confirm Password" type="confirmPassword" ref={cfmpsdRef} />
          <input placeholder="Confirmation Code" />
          <button type="submit">Register</button>
        </form>
      </div>
    </jhform>
  );
};

export default Signup;