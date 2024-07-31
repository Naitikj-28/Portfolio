import React from 'react';
import '../CSS/Contact.css';
import resumeFile from './Data/NaitikJain_Resume.pdf';

const Contact = () => {

    const handleResumeDownload = () => {
        const userConfirmed = window.confirm("Do you want to download Naitik's resume?");

        if (userConfirmed) {
            const link = document.createElement('a');
            link.href = resumeFile;
            link.download = 'Naitik_Jain_Resume.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p>Feel free to get in touch with me for any inquiries, collaborations, or just to say hello!</p>
                    <ul>
                        <li><strong>Email:</strong> naitikjain2810@gmail.com</li>
                        <li><strong>Phone:</strong> 9909741013</li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/naitikjjain1228" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/naitikjjain1228</a></li>
                        <li><strong>GitHub:</strong> <a href="https://github.com/Naitikj-28" target="_blank" rel="noopener noreferrer">https://github.com/Naitikj-28</a></li>
                        <button onClick={handleResumeDownload} className='btn2'>Download Resume</button>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
