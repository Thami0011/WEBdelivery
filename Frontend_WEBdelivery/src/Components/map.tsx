import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import polyline from '@mapbox/polyline';

const MapComponent: React.FC = () => {
    const [map, setMap] = useState<L.Map | null>(null);
    const routePolyline = useRef<L.Polyline>(L.polyline([], { color: 'blue' }));

    useEffect(() => {
        if (!map) {
            const mapInstance = L.map('map').setView([33.57613, -7.63666], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapInstance);
            setMap(mapInstance);
        }
    }, [map]);

    const calculateRoute = () => {
        const startPointInput = document.getElementById('start') as HTMLInputElement;
        const endPointInput = document.getElementById('end') as HTMLInputElement;

        if (startPointInput && endPointInput && map) {
            const startPoint = startPointInput.value;
            const endPoint = endPointInput.value;

            const graphHopperApiKey = '52c7806e-f342-4f8e-9c95-f7388413c43b';
            const apiUrl = `https://graphhopper.com/api/1/route?point=${startPoint}&point=${endPoint}&vehicle=car&key=${graphHopperApiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const points = data.paths[0].points;
                    const decodedPath = decodePolyline(points);

                    routePolyline.current.setLatLngs(decodedPath);

                    map.fitBounds(routePolyline.current.getBounds());

                    const distance = (data.paths[0].distance / 1000).toFixed(2);
                    const duration = (data.paths[0].time / 1000 / 60).toFixed(2);

                    alert('distance :' + distance + ' km ' + '  duration : ' + duration + 'minutes');
                })
                .catch(error => {
                    console.error('There was an error in the order:', error);
                });
        }
    }

    const decodePolyline = (encoded: string): L.LatLng[] => {
        const decoded = polyline.decode(encoded);
        return decoded.map((point: number[]) => L.latLng(point[0], point[1]));
    }

    return (
        <div>
            <div id="map" style={{ height: '400px' }}></div>
            <div>
                <label htmlFor="start">start point :</label>
                <input type="text" id="start" name="start" />
            </div>
            <div>
                <label htmlFor="end">end point :</label>
                <input type="text" id="end" name="end" />
            </div>
            <button onClick={calculateRoute}> calculate Route</button>
        </div>
    );
};

export default MapComponent;
