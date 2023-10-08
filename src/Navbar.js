import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="nav-bar">
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <div className="logo">Movibes</div>
                </NavLink>
                <div className="nav-link">
                    <div className="about-me">About Me</div>
                    <button className="donate-btn">Donate</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;