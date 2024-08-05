import React, { useEffect } from 'react';
import '../CSS/CartoDM.css';
import DM from './Data/DPWORLD.png';
import DM2 from './Data/DPWORLD2.png';
import DM3 from './Data/DPWORLD3.png';
import DM4 from './Data/DM4.png';

function CartoDM() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='carto-dm'>
            <div className='header'>
                <h1>Cartographic Data Visualization</h1>
                <p>Explore the interactive features and capabilities of this cartographic data visualization project.</p>
            </div>

            <section className='overview'>
                <h2>Overview</h2>
                <p>This project visualizes geographical data on a web page, allowing users to interact with and explore cartographic data.</p>
                <p>Our goal is to provide an immersive experience for users to understand geographical trends, patterns, and insights through interactive maps and data visualizations. The project integrates various data sources to present a comprehensive view of geographic information, enhancing the user's ability to analyze and interpret spatial data effectively.</p>
                <p>The visualization tools included in this project support a range of functionalities such as zooming, panning, and layer toggling. These features enable users to drill down into specific areas of interest, view detailed information, and compare different data sets. By leveraging advanced mapping technologies and user-friendly interfaces, the project aims to make complex geographical data more accessible and actionable.</p>
                <p>Additionally, the project is designed to be highly customizable, allowing users to tailor their view based on specific needs or preferences. Whether it's for educational purposes, research, or decision-making, this cartographic visualization project provides valuable insights into geographical data, helping users to make informed decisions and enhance their understanding of the world around them.</p>
                <img src={DM} alt='Overview Screenshot' className='image-main' />
            </section>

            <section className='interactive-map'>
                <h2>Interactive Map</h2>
                <p>The map component allows users to explore different regions and layers of data. Zooming and panning are supported.</p>
                <div className='image-container'>
                    <img src={DM2} alt='Map Screenshot' className='image' />
                    <img src={DM3} alt='Map Screenshot' className='image' />
                </div>
            </section>

            <section className='data-visualization'>
                <h2>Data Visualization</h2>
                <p>This section focuses on how data visualizations are utilized to provide insightful analysis of geographical data. By integrating interactive charts and maps, users can examine trends, patterns, and key metrics relevant to their geographic areas of interest.</p>
                <p>The visualizations are designed to facilitate intuitive understanding of complex data sets. Features include dynamic filtering, customizable views, and real-time data updates to ensure users can easily interpret and engage with the information presented.</p>
                <p>Overall, this section aims to enhance data comprehension through clear and engaging visual representations, helping users to make informed decisions based on comprehensive data analysis.</p>
            </section>

            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li><strong>Zoom & Pan:</strong> Interactive zoom and pan functionalities.</li>
                    <li><strong>Layer Control:</strong> Toggle different data layers.</li>
                    <li><strong>Custom Markers:</strong> Display specific data points with custom markers.</li>
                </ul>
                <img src={DM4} alt='Data Visualization Screenshot' className='image' />
            </section>

            <section className='future-enhancements'>
                <h2>Future Enhancements</h2>
                <p>Future updates may include real-time data updates, additional layers, and improved interactivity.</p>
            </section>
        </div>
    );
}

export default CartoDM;
