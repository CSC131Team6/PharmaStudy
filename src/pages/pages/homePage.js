import React from "react";
import { Link } from "react-router-dom";
import "./nav.modules.css"

export default function HomePage() {
    return ( 
    <body className = "body">
        <nav className = "nav">
        <ul>
            <h2><CustomLink to= "/Bavaria"> Bavaria</CustomLink></h2>
        </ul> <ul>
            <h2><CustomLink to= "/FDA"> FDA</CustomLink></h2>
        </ul> <ul>
            <h2><CustomLink to= "/JaneHopkins"> Jane Hopkins</CustomLink></h2>
        </ul>
        </nav>
        <ms className = "ms">
            <header>Mission Statement:</header>
        </ms>
        <text> Lorem ipsum </text>
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
