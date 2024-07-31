import React from 'react';
import '../CSS/About.css'

export default function About() {
    return (
        <div id="about" className="services-section">
            <h2>What I Do</h2>
            <div className="services">
                <div className="service-card">
                    <h3>Responsive Web Design</h3>
                    <p>Crafting designs that look great on any device, from desktop to mobile, ensuring a seamless user experience.</p>
                </div>
                <div className="service-card">
                    <h3>Interactive User Interfaces</h3>
                    <p>Building engaging and interactive UI components that enhance usability and keep users connected.</p>
                </div>
                <div className="service-card">
                    <h3>Performance Optimization</h3>
                    <p>Optimizing websites for fast load times and smooth performance, providing a better user experience.</p>
                </div>
            </div>
        </div>
    )
}
