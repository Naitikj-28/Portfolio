import React, { useEffect } from 'react';
import '../CSS/Newsm.css';
import webImg from './Data/Picture2.png';

function Newsm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <h1 className="text-center"><u>NewsMonkey</u></h1>
            <div className="mt-4">
                <h2>Introduction</h2>
                <p>NewsMonkey is a comprehensive news aggregation platform designed to deliver the latest updates across various domains. Leveraging React.js for a dynamic interface and Bootstrap for responsive design, NewsMonkey ensures users stay informed with ease.</p>

                <h2>Technological Components</h2>
                <ul>
                    <li>
                        <strong>React.js:</strong>
                        <ul>
                            <li>Facilitates dynamic and efficient rendering of news content.</li>
                            <li>Enables component-based architecture for modular development.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>HTML & CSS (Bootstrap):</strong>
                        <ul>
                            <li>Provides a responsive and user-friendly interface with Bootstrap.</li>
                            <li>Implements HTML for structuring and CSS for styling the web application.</li>
                        </ul>
                    </li>
                </ul>

                <h2>Key Features</h2>
                <ul>
                    <li>
                        <strong>Category-Based Navigation:</strong>
                        <p>Allows users to easily navigate through different news categories such as Business, Entertainment, Health, and more.</p>
                    </li>
                    <li>
                        <strong>Latest News Display:</strong>
                        <p>Shows the latest news articles with a brief description, publication date, and source for quick insights.</p>
                    </li>
                    <li>
                        <strong>Responsive Design:</strong>
                        <p>Ensures the platform is accessible and visually appealing across various devices, including desktops, tablets, and mobile phones.</p>
                    </li>
                    <li>
                        <strong>Read More Links:</strong>
                        <p>Provides links to full articles, allowing users to dive deeper into topics of interest.</p>
                    </li>
                </ul>

                <img src={webImg} alt='web-img here' className='image' />

                <h2>Conclusion</h2>
                <p>Moving forward, these enhancements will solidify NewsMonkey's position as a leading news aggregation platform. Users will benefit from precise, efficient news delivery and a flexible, personalized experience that keeps them informed and engaged.</p>
            </div>
        </div>
    );
}

export default Newsm;
