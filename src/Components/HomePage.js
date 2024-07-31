import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Educ from './Educ';
import '../CSS/HomePage.css';

const HomePage = () => {
    const roles = [
        'Frontend Developer',
        'Web Developer',
        'Tech Enthusiast',
        'Computer Engineer'
    ];

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section className="home-page">
            <div id="home" className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Welcome to My Portfolio</h1>
                        <p>I'm <b>Naitik Jain</b>, a Frontend Developer specializing in creating interactive and beautiful web experiences.</p>
                        <a href="#contact" className="btn">Get in Touch</a>
                    </div>
                </div>
                <div className="hero-image">
                    <h1><span className="text-roller">{roles[currentRole]}</span> </h1>
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            <div id="educ">
                <Educ />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </section>
    );
};

export default HomePage;
