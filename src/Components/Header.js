import react, { useState, useEffect } from "react";
import "../CSS/header.css";
import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel';

export default function Header() {
    return (
        <div className="header-container">
            {/* Projects will be displayed in a carousel in the header */}
            <Carousel>
                <Carousel.Item>
                    <a href="https://mjlynch123.github.io/Landing_Page_FEM/">
                        <Image src="https://github.com/mjlynch123/Landing_Page_FEM/blob/main/images/screenshot.png?raw=true" fluid />
                        <Carousel.Caption>
                            <h3>Landing Page</h3>
                            <p>Basic landing page. Click for more info</p>
                            <a href="https://mjlynch123.github.io/Landing_Page_FEM/" target="_blank">Live Site</a>
                            <a href="https://github.com/mjlynch123/Landing_Page_FEM/" target="_blank">Github Repo</a>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://project-01-amms.github.io/Hop_Around/">
                        <Image src="https://github.com/Project-01-AMMS/Hop_Around/blob/main/assets/Hop%20Around%20Logo.png?raw=true" fluid />
                        <Carousel.Caption>
                            <h3 className="large-caption">Hop Around</h3>
                            <p>This is an app that allows the user to search a city for events and breweries</p>
                            <a href="https://project-01-amms.github.io/Hop_Around/" target="_blank">Live Site</a>
                            <a href="https://github.com/Project-01-AMMS/Hop_Around/" target="_blank">Github Repo</a>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://mjlynch123.github.io/testimonial_page/">
                        <Image src="https://github.com/mjlynch123/testimonial_page/blob/main/images/Testimonial.png?raw=true" fluid id="third-img" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            <a href="https://mjlynch123.github.io/testimonial_page/" target="_blank">Live Site</a>
                            <a href="https://github.com/mjlynch123/testimonial_page/" target="_blank">Github Repo</a>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}