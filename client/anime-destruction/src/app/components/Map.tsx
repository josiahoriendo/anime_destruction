'use client' //might limit the changing of choose event but we'll see


import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

const MapComponent: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';

        script.onload = () => {
            // Leaflet script is loaded, initialize the map
            const map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        };

        document.head.appendChild(script);

        // Cleanup: remove the script element when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="h-fit w-fit bg-gray-200" id="map"></div>
    );
}

export default MapComponent;