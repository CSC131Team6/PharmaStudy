import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.modules.css";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

export default function HomePage() {
    const [showPopup, setShowPopup] = useState(true);

    const handleOkClick = () => {
        setShowPopup(false);
    };

    return (
        <body className="body">
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>Welcome to the online portal, powered by Vendia Share. Please login using the navigation bar up above!</h1>
                        <button onClick={handleOkClick}>Ok</button>
                    </div>
                </div>
            )}
            <nav className="nav">
                <icon>
                    <img
                        src="Sac State logo"
                        src="https://www.csus.edu/NewCSUS2019-global-assets/_internal/images/logo-horizontal.png"
                    ></img>
                </icon>
                <ul>
                    <titles>
                        <CustomLink to="/Bavaria"> Bavaria</CustomLink>
                    </titles>
                </ul>{" "}
                <ul>
                    <titles>
                        <CustomLink to="/FDA"> FDA</CustomLink>
                    </titles>
                </ul>{" "}
                <ul>
                    <titles>
                        <CustomLink to="/JaneHopkins"> Jane Hopkins</CustomLink>
                    </titles>
                </ul>
            </nav>
            <ms className="ms">
                <header>Mission Statement:</header>
            </ms>
            <text>
                Quality patient care is our priority. Providing excellent clinical and
                service quality, offering compassionate care, and supporting research
                and medical education are essential to our mission. This mission is
                founded in the ethical & cultural precepts of the Judaic tradition,
                which inspire devotion to the art and science of healing & to the care
                we give our patients and staff.
            </text>

            <div className="imagesp">
                <img
                    src="https://media.istockphoto.com/id/1383414110/photo/shot-of-a-group-of-doctors-using-a-digital-tablet-at-work.jpg?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=Vf1ylSNw_S0Pr3RfHl9PSPaUDxPE7G0BVOmOzvHDxdE="
                    alt="Doctors meeting"
                    style={{ maxWidth: "50%" }}
                />
                <img
                    src="https://www.grxstatic.com/4f3rgqwzdznj/6htBaxxtTxg7aRcEY808hX/c238d6fc8340bd977e88960d7c38ba71/close_up_doctor_and_patient_with_medicine-1169928112.jpg?format=pjpg&amp;auto=webp"
                    alt="Drugs"
                    style={{ maxWidth: "50%" }}
                />
            </div>
        </body>
    );
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname;

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
