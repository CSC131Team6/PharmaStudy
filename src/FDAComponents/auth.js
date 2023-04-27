import React, { useState } from "react";
import Signin from "./signIn";
import Signup from "./signUp";
import "./fda.modules.css"

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="bavariaform">
      {!index ? <Signin /> : <Signup />}
      <form onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </form>
    </div>
  );
};

export default Auth;
