import React from "react";
import "../CSS/contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <form className="contact-form">
                <div className="contact-left">
                    <div className="contact-info">
                        <h1>Contact Information</h1>
                        <p>For any inquiries, please fill out this form and I will get back to as soon as possible.</p>
                    </div>
                </div>
                <div className="contact-right">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <br />
                        <input type="text" id="phone" name="phone" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <br />
                        <textarea id="message" name="message" placeholder="Write your message" />
                    </div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}