import React from "react"
import globe from "../images/globe.png"

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img src={globe} alt="globe" className="navbar-logo" />
            <p className="navbar-text">My Travel Journal</p>
        </nav>
    )
}