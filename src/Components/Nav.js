import React, { useState, useEffect } from "react";
import '../CSS/nav.css';
import logo from '../Images/logo4.png';

export default function Nav() {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <a href="#"><li>About Me</li></a>
                    <a href="#"><li>Services</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </nav>
        </div>
    )
}