import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    
    return(
        <header className="navbar">
            <nav className="nav-container">
                <div className="nav-logo">
                    <Link to="/"><img src="../logo_nobg.png" width="50px" height="50px"></img></Link>
                </div>
                <div className="menu">
                    <ul className="nav-links">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Calculator</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}