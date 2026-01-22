import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    
    return(
        <header className="navbar">
            <nav className="nav-container">
                <div className="nav-logo">
                    <Link to="/">Home</Link>
                </div>
                <ul className="right-nav">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    )

}