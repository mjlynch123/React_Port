import React from "react";
import "../CSS/contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <form className="contact-form">
                <h1>Contact</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="phone">Email:</label>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}