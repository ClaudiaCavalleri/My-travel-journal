import React from "react";
import worldImg from "./images/world.png";

export default function Navbar() {
    return (
        <nav>
            <img src = {worldImg} className = "world-img" alt="world-icon" />
            <h1 className="navbar--h1">My Travel Journal</h1>
        </nav>
    )
}