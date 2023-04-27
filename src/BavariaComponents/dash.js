import React from "react";
import { useState } from "react";
import { useUserContext } from "../config/BavariaUserContext";
import useJaneHopkins from "../hooks/useJaneHopkins";
import useFDA from "../hooks/useFDA";
import useBavaria from "../hooks/useBavaria";
import "./bavaria.modules.css";
import Bavaria from "./Bavaria";
import PatientTableBav from "./Bavaria/patientBav";

function Dashboard() {
  const bavariaData = {
    iconMedicines: "./static/img/---icon--medicines-@2x.png",
    bavaria: "Bavaria",
    patientList: "Patient List",
    navbarLinkPlace1: "Name",
    navbarLinkResults: "Results",
    navbarLinkPlace2: "Date",
    navbarLinkPlacebo: "Placebo",
    shyamKhanna: "Shyam Khanna",
    text1: "01/27",
    name1: "Jean Lee Un",
    text2: "01/27",
    name2: "Clara Brook",
    text3: "01/27",
    title: "Send Drugs",
  };

  const { user, logoutUser } = useUserContext();
  
  return (
    <>
      <div>
        <h2>{user.email}</h2>
        <button onClick={logoutUser}>Log out</button>
      </div>
      <PatientTableBav />
    </>
  );
};

//<Bavaria {...bavariaData} />
export default Dashboard;