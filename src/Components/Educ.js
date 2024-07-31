import React from 'react';
import '../CSS/Educ.css';

function Educ() {
    return (
        <div className='Educ'>
            <h2>Education Qualification</h2>
            <div className='Educ-content'>
                <div className='Educ-section'>
                    <h3>10th Grade</h3>
                    <p><strong>School:</strong> Silver Bells School</p>
                    <p><strong>Percentage:</strong> 65%</p>
                </div>
                <div className='Educ-section'>
                    <h3>12th Grade</h3>
                    <p><strong>School:</strong> Fellowship High School</p>
                    <p><strong>Percentage:</strong> 75%</p>
                </div>
                <div className='Educ-section'>
                    <h3>B.Tech Computer Engineering</h3>
                    <p><strong>Institution:</strong> Silver Oak University</p>
                    <p><strong>CGPA:</strong> 8.47</p>
                    <p><strong>Status:</strong> Currently pursuing (7th semester)</p>
                </div>
            </div>
        </div>
    );
}

export default Educ;
