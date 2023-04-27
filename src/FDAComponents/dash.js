import React from "react";
import { useState } from "react";
import { useUserContext } from "../config/FDAUserContext";
import useJaneHopkins from "../hooks/useJaneHopkins";
import useFDA from "../hooks/useFDA";
import useBavaria from "../hooks/useBavaria";
import "./fda.modules.css"

function Dashboard() {
  const { user, logoutUser } = useUserContext();
  return (
    <>
      <div>
        <h2>{user.email}</h2>
        <button onClick={logoutUser}>Log out</button>
      </div>
    <div
      style={{
      position: "absolute",
      left: "50%",
      top: "60%",
      transform: "translate(-50%, -50%)",
    }}
    >
    <h1>Welcome to the FDA Home Page</h1>
    </div>
    </>
  );
};

export default Dashboard;