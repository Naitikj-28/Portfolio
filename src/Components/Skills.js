import React from 'react';
import '../CSS/Skills.css';
import reactLogo from './Data/react-2.svg';
import nodelogo from './Data/nodejs-icon.svg';
import javaslogo from './Data/javascript-1.svg';
import htmllogo from './Data/html-1.svg';
import csslogo from './Data/css-3.svg';
import bootlogo from './Data/bootstrap-5-1.svg';

export default function Skills() {
    const skills = [
        { name: 'React.js', logo: reactLogo, className: 'react-logo' },
        { name: 'Node.js', logo: nodelogo, className: 'node-logo' },
        { name: 'Javascript', logo: javaslogo, className: 'javas-logo' },
        { name: 'HTML', logo: htmllogo, className: 'html-logo' },
        { name: 'CSS', logo: csslogo, className: 'css-logo' },
        { name: 'Bootstrap', logo: bootlogo, className: 'boot-logo' }
    ];

    return (
        <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-container'>
                {skills.map((skill, index) => (
                    <div key={index} className='skill-item'>
                        <img src={skill.logo} alt={`${skill.name} logo`} className={`skill-logo ${skill.className || ''}`} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
