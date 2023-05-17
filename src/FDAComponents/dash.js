import React from "react";
import { useState } from "react";
import { useUserContext } from "../config/FDAUserContext";
import useJaneHopkins from "../hooks/useJaneHopkins";
import useFDA from "../hooks/useFDA";
import useBavaria from "../hooks/useBavaria";
import "./fda.modules.css";

function Dashboard() {
    const { user, logoutUser } = useUserContext();

    return (
        <>
            <div>
                <h2>{user.email}</h2>
                <button onClick={logoutUser}>Log out</button>
            </div>

            <div className="fdaform">
                <h1 className="fdaform__title">Welcome to the FDA Home Page</h1>
                <div className="fdaform__container">
                    <h2 className="fdaform__subtitle">Form Title</h2>
                    <form className="fdaform__form">
                        {/* form elements here */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
