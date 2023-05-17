import React from "react";
import Auth from "../FDAComponents/auth";
import Dashboard from "../FDAComponents/dash";
import { useUserContext } from "../config/FDAUserContext";

export default function FDA() {
    const { user, loading, error } = useUserContext();

    return (
        <div className="App">
            <nav className="nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Food_and_Drug_Administration_logo.svg/1280px-Food_and_Drug_Administration_logo.svg.png" alt="FDA logo" style={{ width: '60px', height: '25px' }} />
                <ul>
                    <li>
                        <a href="#">Retrieve Smart Contract Parameters</a>
                    </li>
                    <li>
                        <a href="#">Patient Profile</a>
                    </li>
                    <li>
                        <a href="#">Notify Study Completion</a>
                    </li>
                    <li>
                        <a href="#">Generate Post-Trial Report</a>
                    </li>
                </ul>
            </nav>
            <div className="container">
                {error && <p className="error">{error}</p>}
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        {user ? (
                            <Dashboard />
                        ) : (
                            <Auth />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
