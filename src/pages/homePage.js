import React from "react";
import { Link } from "react-router-dom";
import "./nav.modules.css"
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

export default function HomePage() {
    return ( 
    <body className = "body">
        <nav className = "nav">
        <ul>
            <titles><CustomLink to= "/Bavaria"> Bavaria</CustomLink></titles>
        </ul> <ul>
            <titles><CustomLink to= "/FDA"> FDA</CustomLink></titles>
        </ul> <ul>
            <titles><CustomLink to= "/JaneHopkins"> Jane Hopkins</CustomLink></titles>
        </ul>
        </nav>
        <ms className = "ms">
            <header>Mission Statement:</header>
        </ms>
        <text> Our mission is to research and create antiviral medicine </text>
        <div/>
        <text>in order to create a better and safer world </text>
        <div/>
        <text> for all those in need, regardless of age, race, or status. </text>
    </body>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

