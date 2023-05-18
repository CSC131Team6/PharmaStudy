import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useUserContext } from "../config/FDAUserContext";
import useJaneHopkins from "../hooks/useJaneHopkins";
import useFDA from "../hooks/useFDA";
import useBavaria from "../hooks/useBavaria";
import "./fda.modules.css";

function Dashboard() {
    const { user, logoutUser } = useUserContext();
    const [contractParameters, setContractParameters] = useState(null);
    const [completionNotification, setCompletionNotification] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [agreedToContract, setAgreedToContract] = useState(false);
    const retrieveContractParameters = () => {
        if (agreedToContract) {
            // Implement the logic to retrieve parameters from the FDA smart contract
            // and update the state variable `contractParameters` with the retrieved data.
        } else {
            setShowModal(true);
        }
    };


    const notifyStudyCompletion = () => {
        // Implement the logic to notify Jane Hopkins and Bavaria
        // about the study completion without disclosing PII.
        setCompletionNotification(true);
    };

    const closeNotification = () => {
        setCompletionNotification(false);
    };
    const handleAgree = () => {
        setAgreedToContract(true);
        setShowModal(false);
    };
    const handleDisagree = () => {
        setAgreedToContract(false);
        setShowModal(false);
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
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="Contract Modal"
            >
                <div className="contract-modal-content">
                    <h2>Terms and Conditions</h2>
                    <p>
                    FDA Smart Contract Terms and Conditions

Welcome to the FDA Smart Contract ("Contract") provided by [Your Mock Website Name]. The following terms and conditions ("Terms") govern your use of the Contract. By using the Contract, you agree to be bound by these Terms.

1. Contract Purpose

The FDA Smart Contract is a fictional concept designed to simulate the functionality of an automated system for evaluating and approving medical products. It is intended for entertainment and educational purposes only. Please note that this Contract has no real-world applicability or affiliation with any regulatory body, including the U.S. Food and Drug Administration (FDA).

2. Not Medical Advice

The information provided by the Contract, including but not limited to product descriptions, recommendations, or any other content, should not be considered medical advice or relied upon for making medical decisions. Consult a qualified healthcare professional for any medical-related concerns or queries.

3. Accuracy of Information

While we strive to ensure the accuracy and reliability of the information provided by the Contract, we do not guarantee its completeness, timeliness, or suitability for any specific purpose. You acknowledge that any reliance on the information obtained from the Contract is at your own risk.

4. User Responsibilities

a. Eligibility: By using the Contract, you represent that you are at least 18 years old and have the legal capacity to enter into these Terms.

b. Personal Information: You agree to provide accurate and up-to-date information when using the Contract, and you understand that any personal information shared is subject to our Privacy Policy.

c. Compliance: You shall comply with all applicable laws, regulations, and these Terms while using the Contract.

5. Intellectual Property

a. Ownership: All intellectual property rights, including but not limited to copyrights, trademarks, and patents associated with the Contract, belong to [Your Mock Website Name].

b. Restrictions: You may not reproduce, modify, distribute, display, or create derivative works of any part of the Contract without prior written permission from [Your Mock Website Name].

6. Limitation of Liability

a. Use at Your Own Risk: You understand and agree that the use of the Contract is at your own risk. [Your Mock Website Name] shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the Contract.

b. Third-Party Content: The Contract may include links or references to third-party websites or content. [Your Mock Website Name] does not endorse or assume any responsibility for the accuracy or reliability of any third-party content.

7. Modification and Termination

a. Modification: [Your Mock Website Name] reserves the right to modify or update these Terms at any time. You are encouraged to review the most current version of the Terms periodically.

b. Termination: [Your Mock Website Name] may terminate the Contract or your access to it at any time without prior notice and for any reason.

8. Governing Law and Jurisdiction

These Terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your Country/State].

By using the FDA Smart Contract, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree with any of these Terms, please refrain from using the Contract.
                    </p>
                    <div className="contract-modal-buttons">
                        <button onClick={handleAgree}>Agree</button>
                        <button onClick={handleDisagree}>Disagree</button>
                    </div>
                </div>
            </Modal>

            <div className="patient-table-container">
                <table className="patient-table">
                    
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
                        <tr>
                            <td>6532483279</td>
                            <td>Jason Cha</td>
                            <td>1996</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>6238193821</td>
                            <td>Jordyn Rista</td>
                            <td>1237</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>163428865</td>
                            <td>Ian Moose</td>
                            <td>2003</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>36547363</td>
                            <td>Danny Devito</td>
                            <td>4003</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>166436373</td>
                            <td>He Man</td>
                            <td>1010</td>
                            <td>yes</td>
                        </tr>
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
