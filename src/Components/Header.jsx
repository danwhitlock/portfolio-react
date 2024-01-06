import React from "react";
import '../index.css'

function Nav() {
    return (
        <nav>
        <h1>Dan Whitlock</h1>
        <ul className="navbar">
            <li><a href="#about" className="navbar-link">About</a></li>
            <li><a href="#skills" className="navbar-link">Skills</a></li>
            <li><a href="#projects" className="navbar-link">Projects</a></li>
            <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
        <ion-icon name="reorder-four-outline" className="menu-button"></ion-icon>
    </nav>
    )
}

export default Nav;