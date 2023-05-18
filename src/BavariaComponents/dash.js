import React, { useState } from "react";
import { useUserContext } from "../config/BavariaUserContext";
import "./bavaria.modules.css";

function Dashboard() {
    const [assignedDrugs, setAssignedDrugs] = useState([]);
    const [patientStatus, setPatientStatus] = useState([]);
    const [currentDose, setCurrentDose] = useState("");
    const [trialResults, setTrialResults] = useState("");
    const [patientId, setPatientId] = useState("");
    const [patientName, setPatientName] = useState("");

    const { user, logoutUser } = useUserContext();

    // Function to handle drug assignment
    const handleAssignDrug = (e) => {
        e.preventDefault();
        const drugId = e.target.elements.drugId.value;
        // Make a request to the Vendia API to assign the drug
        // Update the assigned drugs state with the response data
        const assignedDrug = {
            id: drugId,
            name: "Assigned Drug",
            patient: patientId,
        };
        setAssignedDrugs([...assignedDrugs, assignedDrug]);
        e.target.reset();
    };

    // Function to fetch patient status and current dose information
    const fetchPatientInfo = () => {
        // Check if patient ID and name match the specific valid values
        if (patientId.trim() === '6532483279' && patientName.trim() === 'Jason Cha') {
            setCurrentDose('Placebo');
            setPatientStatus(['Trial in progress']);
            setTrialResults('');
        } else {
            setCurrentDose('Invalid User/ID');
            setPatientStatus([]);
            setTrialResults('');
        }
    };


    // Function to generate trial report
    const handleGenerateReport = () => {
        // Make a request to the Vendia API to generate the trial report
        // Update the trial results state with the response data
        setTrialResults("Trial results will be generated.");
    };

    return (
        <>
            <div className="top-bar">
                <div className="top-bar-left">
                    <img className="logo" src="https://media.istockphoto.com/id/967091208/vector/pharmacy-pill-logo-icon.jpg?s=170667a&w=0&k=20&c=WB-SjdOZ2993kW3bbPdkPWd3jV3aXl30_Ypj708k5E4=" alt="Logo" />
                    <a href="/">Home</a>
                </div>
                <div className="top-bar-right">
                    <p>Welcome, {user.email}</p>
                    <button onClick={logoutUser}>Log out</button>
                </div>
            </div>
            <div className="contentFull">
                <div className="screen">
                    {/* Drug assignment feature */}
                    <div className="bavariaform">
                        <div className="container">
                            <h3>Send Drugs</h3>
                            {/* Render the input fields and button for drug assignment */}
                            <form onSubmit={handleAssignDrug}>
                                <input
                                    type="text"
                                    placeholder="Patient ID"
                                    name="patientId"
                                    required
                                    value={patientId}
                                    onChange={(e) => setPatientId(e.target.value)}
                                />
                                <input type="text" placeholder="Drug ID" name="drugId" required />
                                <button type="submit">Assign</button>
                            </form>
                            {/* Render the assigned drugs */}
                            <div className="assignedDrugs">
                                {assignedDrugs.map((drug) => (
                                    <p key={drug.id}>
                                        {drug.name} - {drug.patient}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Trial monitoring feature */}
                    <div className="bavariaform">
                        <div className="container">
                            <h3>Monitor Ongoing Trials</h3>
                            {/* Render the input fields and button for fetching patient info */}
                            <form onSubmit={fetchPatientInfo}>
                                <input
                                    type="text"
                                    placeholder="Patient ID"
                                    name="patientId"
                                    required
                                    value={patientId}
                                    onChange={(e) => setPatientId(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Patient Name"
                                    name="patientName"
                                    required
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                />
                                <button type="button" onClick={fetchPatientInfo}>
                                    Fetch Info
                                </button>
                            </form>
                            {/* Render patient status and current dose information */}
                            <div className="patientInfo">
                                <p>Patient ID: {patientId}</p>
                                <p>Patient Name: {patientName}</p>
                                {patientStatus.map((status, index) => (
                                    <p key={index}>Status: {status}</p>
                                ))}
                                <p>Current Dose: {currentDose}</p>
                            </div>
                        </div>
                    </div>
                    {/* Trial report generation feature */}
                    <div className="bavariaform">
                        <div className="container">
                            <h3>Generate Post-Trial Report</h3>
                            {/* Render the button for generating trial report */}
                            <button onClick={handleGenerateReport}>Generate Report</button>
                            {/* Render trial results */}
                            <div className="trialResults">
                                <p>{trialResults}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
