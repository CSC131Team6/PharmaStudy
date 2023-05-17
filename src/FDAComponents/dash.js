import React from "react";
import { useState } from "react";
import { useUserContext } from "../config/FDAUserContext";
import useJaneHopkins from "../hooks/useJaneHopkins";
import useFDA from "../hooks/useFDA";
import useBavaria from "../hooks/useBavaria";
import "./fda.modules.css";

function Dashboard() {
    const { user, logoutUser } = useUserContext();
    const [contractParameters, setContractParameters] = useState(null);
    const [completionNotification, setCompletionNotification] = useState(false);

    const retrieveContractParameters = () => {
        // Implement the logic to retrieve parameters from the FDA smart contract
        // and update the state variable `contractParameters` with the retrieved data.
    };

    const notifyStudyCompletion = () => {
        // Implement the logic to notify Jane Hopkins and Bavaria
        // about the study completion without disclosing PII.
        setCompletionNotification(true);
    };

    const closeNotification = () => {
        setCompletionNotification(false);
    };

    return (
        <>
            <nav className="top-nav">
                <img
                    src="https://mdic.org/wp-content/uploads/2020/06/FDA-Logo.jpg"
                    alt="FDA Logo"
                    className="top-nav__logo"
                />
                <div className="top-nav__greeting">
                    Hello, {user.email}!
                </div>
                <ul className="top-nav__menu">
                    {/* Add navigation links here */}
                    <li className="top-nav__menu-item home-button">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <button onClick={logoutUser}>Log out</button>
                    </li>
                </ul>
            </nav>

            <div className="fdaform">
                <h1 className="fdaform__title">Welcome to the FDA Home Page</h1>
                <div className="fdaform__container">
                    <div className="fdaform__images">
                        <div className="fdaform__image-container">
                            <img
                                src="https://www.fda.gov/files/FDA-Inspection-Tools-FDA-Voices-04_1600x900.png"
                                alt="Image 1"
                                className="fdaform__image"
                            />
                        </div>
                        <div className="fdaform__image-container">
                            <img
                                src="https://cdn.cfr.org/sites/default/files/styles/immersive_image_3_2_desktop_2x/public/image/2021/09/FDA_IB.jpg.webp"
                                alt="Image 2"
                                className="fdaform__image"
                            />
                        </div>
                        <div className="fdaform__image-container">
                            <img
                                src="https://consumer.healthday.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNzM3MzczMS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYzMjMwNTk2Mn0.7TdEDkpwgCL-uLiUJErtZdqCzUYtBMtcHfFKzDPAdQk/image.jpg?width=1245&coordinates=0%2C91%2C0%2C92&height=700"
                                alt="Image 3"
                                className="fdaform__image"
                            />
                        </div>
                    </div>
                    <form className="fdaform__form">
                        {/* form elements here */}
                    </form>
                </div>
            </div>

            <div className="patient-table-container">
                <table className="patient-table">
                    <caption>Replace with patient table here</caption>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Eligibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add patient data rows here */}
                    </tbody>
                </table>
            </div>

            <div>
                <button className="action-button" onClick={retrieveContractParameters}>
                    Retrieve Smart Contract Parameters
                </button>
                {contractParameters && (
                    <div>
                        {/* Display the retrieved contract parameters */}
                    </div>
                )}
            </div>

            <div>
                <button className="action-button" onClick={notifyStudyCompletion}>
                    Notify Study Completion
                </button>
                {completionNotification && (
                    <div className="notification-container">
                        <div className="notification-box">
                            <div>
                                Study completion notification sent to Jane Hopkins and Bavaria.
                            </div>
                            <button className="close-button" onClick={closeNotification}>
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Dashboard;
