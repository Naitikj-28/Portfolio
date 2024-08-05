import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Projects.css';

const Projects = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects">
                <div className="project-card">
                    <h3>Drone Calculator</h3>
                    <p>A web application that calculates drone flight times and battery usage based on user inputs.<br />Project for AccionLAND PVT LTD.</p>
                    <button className="btn" onClick={() => handleClick('/DroneCalci')}>View Project</button>
                </div>
                <div className="project-card">
                    <h3>News Web Page</h3>
                    <p>Real-time news monitoring, providing updates on the latest news.</p>
                    <button className="btn" onClick={() => handleClick('/Newsmon')}>View Project</button>
                </div>
                <div className="project-card">
                    <h3>Cartographic Detail Maps</h3>
                    <p>An interactive chess game with features like move validation, user vs. computer & user vs. user play, and game details.</p>
                    <button className="btn" onClick={() => handleClick('/CartoDM')}>View Project</button>
                </div>
                <div className="project-card">
                    <h3>Chess Web Page</h3>
                    <p>An interactive chess game with features like move validation, user vs. computer & user vs. user play, and game details.</p>
                    <button className="btn" onClick={() => handleClick('/ChessWebPage')}>View Project</button>
                </div>
            </div>
        </section>
    );
};

export default Projects;