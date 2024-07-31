import React, { useEffect } from 'react';
import '../CSS/DroneCalci.css';
import webImg from './Data/Picture1.png';

function DroneCalci() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center"><u>Drone Survey</u> <u>Pricing Platform</u></h1>
      <div className="mt-4">
        <h2>Introduction</h2>
        <p>Our drone survey pricing platform leverages JavaScript, HTML, and CSS (Bootstrap) to offer users a seamless experience. Key functionalities include the ability to calculate survey pricing by adding hectares, uploading KML files, drawing shapes on the map, and exporting the drawn shapefile in KML format with latitude-longitude coordinates.</p>

        <h2>Technological Components</h2>
        <ul>
          <li>
            <strong>JavaScript (JS):</strong>
            <ul>
              <li>Employs Leaflet Maps library for interactive mapping features.</li>
              <li>Utilizes the Omivore (Leaflet) library for efficient handling of GeoJSON and KML data.</li>
            </ul>
          </li>
          <li>
            <strong>HTML & CSS (Bootstrap):</strong>
            <ul>
              <li>Provides a user-friendly interface with Bootstrap for responsive design.</li>
              <li>Implements HTML for structuring and CSS for styling the web application.</li>
            </ul>
          </li>
        </ul>

        <h2>Key Functionalities</h2>
        <ul>
          <li>
            <strong>Hectare Calculation:</strong>
            <p>Allows users to calculate survey pricing by adding hectares, providing a straightforward method for cost estimation.</p>
          </li>
          <li>
            <strong>KML File Upload:</strong>
            <p>Permits users to upload KML files, streamlining the input process and enhancing user convenience.</p>
          </li>
          <li>
            <strong>Map Drawing Feature:</strong>
            <p>Our platform now lets you draw shapes directly on the map using the Leaflet Maps library. This makes it easy for you to define survey areas visually and intuitively.</p>
          </li>
          <li>
            <strong>Shapefile Export:</strong>
            <p>You can export the drawn shapes in KML format, which includes latitude and longitude coordinates. This makes it convenient to use the data in other GIS applications.</p>
          </li>
        </ul>

        <img src={webImg} alt='web-img here' className='image' />

        <h2>Features</h2>
        <ul>
          <li>
            <strong>Backend SQL Integration:</strong>
            <p>We're connecting the platform to a backend SQL database to store and manage pricing data. This will enable real-time updates of survey prices and DGPS rates through a secure and efficient database system.</p>
          </li>
          <li>
            <strong>Dynamic Pricing Form:</strong>
            <p>We're implementing a user-friendly form in the interface, allowing administrators to easily modify survey pricing and DGPS rates. This ensures a smooth experience without the need for extensive coding or technical expertise.</p>
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>As we move forward, these enhancements will solidify our position in the drone survey market, offering users not only precise and efficient survey pricing calculations but also a flexible and dynamic pricing management system.</p>
      </div>
    </div>
  )
}

export default DroneCalci;
