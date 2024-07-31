import React from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">MyPortfolio</a>
            </div>
            <nav className="nav">
                <a className="nav-link" href="#about">About</a>
                <a className="nav-link" href="#educ">Education</a>
                <a className="nav-link" href="#skills">Skills</a>
                <a className="nav-link" href="#projects">Projects</a>
                <a className="nav-link" href="#contact">Contact</a>
            </nav>
        </nav>
    );
}

export default Navbar;
