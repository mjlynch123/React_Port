import React from "react";
import Contact from "./Contact";
import Header from "./Header";
import Nav from "./Nav";

import "../CSS/home.css";

export default function HomePage() {
    return (
        <div className="home-container">
            <div className="header">
                {/* Projects will be displayed in a carousel in the header */}
                <Nav />
                <Header />
            </div>

            <div className="about-me">

            </div>

            <div className="languages">

            </div>

            <div className="contact">
                {/* Contact form will be hidden until the user clicks a button that will make it appear */}
            </div>
            <Contact />
        </div>
    );
}