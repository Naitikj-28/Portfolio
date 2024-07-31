import React, { useState, useEffect } from 'react';
import '../CSS/ChessWebPage.css';
import mainpage from './Data/Capture.PNG';
import Signin from './Data/Capture2.PNG';
import Signup from './Data/Capture13.png';
import Welcome from './Data/Capture3.png';
import T2 from './Data/Capture5.png';
import T3 from './Data/Capture6.png';
import gdetail from './Data/Capture7.png';
import pstats from './Data/Capture8.png';
import profile from './Data/Capture11.png';
import Img9 from './Data/Capture10.png';
import Img10 from './Data/Capture9.png';
import formp from './Data/Capture12.png';
import homepage from './Data/Capture14.png';

function ChessWebPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [mainpage, Signin, Signup];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='chess-webpage'>
            <header className='header'>
                <h1>Chess Web Application</h1>
                <p>An advanced online gaming platform that transforms the classic strategy board game into an immersive digital experience.</p>
            </header>

            <section className='features'>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Real-time Gameplay:</strong> Employing Web-Sockets for instant player communication guaranteeing responsive and interactive gaming sessions.</li>
                    <li><strong>Responsive Design:</strong> Developed with React ensuring optimal performance across desktop, tablet, and mobile devices for a consistent user experience.</li>
                    <li><strong>Secure and Scalable:</strong> Built on Node.js and Socket.IO providing a secure and efficient backend infrastructure for reliable client-server interactions.</li>
                    <li><strong>Rich User Interface:</strong> Intuitive design with features like move tracking, comprehensive game history, and real-time notifications to enhance user engagement.</li>
                </ul>
            </section>

            <section className='authentication'>
                <h2>User Authentication</h2>
                <p>The screenshot showcases the user authentication interface built with React.js. The sign-in form utilizes controlled components with state management, ensuring secure handling of user inputs. Authentication requests are sent to a Node.js backend over HTTPS where passwords are hashed using bcrypt for security.</p>
            </section>
            <div className='slider-container'>
                <button className='nav-button left' onClick={goToPrevious}>❮</button>
                <img src={images[currentIndex]} alt='slider-img' className='slider-image' />
                <button className='nav-button right' onClick={goToNext}>❯</button>
            </div>

            <section className='chess-interface'>
                <h2>Main Chess Interface</h2>
                <p>After signing in successfully, users are directed to the main chess web page. The interface prominently features a responsive chessboard powered by real-time updates facilitated through Socket.IO and Node.js. User authentication status is maintained using React's state management or Redux.</p>
            </section>
            <img src={Welcome} alt='web-img here' className='image image-main' />
            <img src={homepage} alt='web-img here' className='image image-main' />


            <section className='match-details'>
                <h2>View Match Details</h2>
                <p>To provide a more detailed view of each match, our application features a modal window that displays the match data. The modal content is populated dynamically using data from the database ensuring that the information is accurate and up-to-date.</p>
                <ul>
                    <li><strong>Player Profile:</strong> The name ,email and password of the user with function which can be edit or delete the account </li>
                    <img src={profile} alt='web-img here' className='image image-main' />
                    <li><strong>Player Stats:</strong> It shows the player game ratio of wins ,loses, and draws.</li>
                    <img src={pstats} alt='web-img here' className='image image-main' />
                    <li><strong>Description:</strong> A brief note about the match as entered by the user in the form.</li>
                    <img src={gdetail} alt='web-img here' className='image image-main' />
                </ul>
            </section>

            <section className='form-submission'>
                <h2>Form Submission</h2>
                <p>Our application utilizes an HTML form to collect game data from users, submitting it to the server via a POST request. The form accepts inputs like Player One, Player Two, Winner, Description, and Date. The server processes and stores this data securely.</p>
            </section>
            <img src={formp} alt='web-img here' className='image image-main' />

            <section className='data-visualization'>
                <h2>Data Visualization</h2>
                <p>The processed data is displayed in the ChessMain section featuring tables that showcase player statistics including Wins, Losses, Draws, Total Matches, and Played as White/Black.</p>
            </section>
            <img src={T2} alt='web-img here' className='image image-main' />
            <img src={T3} alt='web-img here' className='image image-main' />
            <section className='game-modes'>
                <h2>Game Modes</h2>
                <p>Our application offers two game modes:</p>
                <ul>
                    <li><strong>Online Mode:</strong> Enables players connected to the same network to play against each other remotely using a room PIN generated with UUID and Socket.IO for real-time communication.</li>
                    <img src={Img10} alt='web-img here' className='image image-main' />
                    <li><strong>Over-the-Board Game:</strong> Allows players to play locally on a single device using both the white and black sides of the chessboard.</li>
                    <img src={Img9} alt='web-img here' className='image image-main' />
                </ul>
            </section>
        </div>
    );
}
// }

export default ChessWebPage;