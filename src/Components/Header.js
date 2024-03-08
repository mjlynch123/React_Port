import react, { useState, useEffect } from "react";
import "../CSS/header.css";
import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel';

export default function Header() {
    const projects = [
        {
            name: "Landing Page",
            description: "Basic landing page",
            liveSite: "https://mjlynch123.github.io/Landing_Page_FEM/",
            githubRepo: "https://github.com/mjlynch123/Landing_Page_FEM/",
            img: "https://github.com/mjlynch123/Landing_Page_FEM/blob/main/images/screenshot.png?raw=true"
        },
        {
            name: "Hop Around",
            description: "This is an app that allows the user to search a city for events and breweries",
            liveSite: "https://project-01-amms.github.io/Hop_Around/",
            githubRepo: "https://github.com/Project-01-AMMS/Hop_Around/",
            img: "https://github.com/Project-01-AMMS/Hop_Around/blob/main/assets/Hop%20Around%20Logo.png?raw=true",
        },
        {
            name: "Testimonial Page",
            description: "Basic landing page",
            liveSite: "https://mjlynch123.github.io/testimonial_page/",
            githubRepo: "https://github.com/mjlynch123/testimonial_page/",
            img: "https://github.com/mjlynch123/testimonial_page/blob/main/images/Testimonial.png?raw=true",
        },
    ]

    return (
        <div className="header-container">
            {/* Projects will be displayed in a carousel in the header */}
            <Carousel>
                {projects.map((project, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <a href={project.liveSite}>
                                <Image src={project.img} fluid />
                                <Carousel.Caption>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.liveSite} target="_blank">Live Site</a>
                                    <a href={project.githubRepo} target="_blank">Github Repo</a>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}