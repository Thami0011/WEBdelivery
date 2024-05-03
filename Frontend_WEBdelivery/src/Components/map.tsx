import React, { useState, useEffect } from 'react';
import L, { LatLngExpression, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Définir le type pour la méthode fromEncoded
declare module 'leaflet' {
    namespace Polyline {
        function fromEncoded(encoded: string, options?: PolylineOptions): Polyline;
    }
}

const MapComponent: React.FC = () => {
    const [map, setMap] = useState<L.Map | null>(null);
    const [startPointMarker, setStartPointMarker] = useState<L.Marker | null>(null);
    const [endPointMarker, setEndPointMarker] = useState<L.Marker | null>(null);
    const [routePolyline, setRoutePolyline] = useState<L.Polyline | null>(null);
    const [currentLocation, setCurrentLocation] = useState<{ latitude: number, longitude: number } | null>(null);


    useEffect(() => {
        const mapInstance = L.map('map').setView([0, 0] as LatLngExpression, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapInstance);
        setMap(mapInstance);

        getCurrentLocation(); // Obtenir la position de l'utilisateur au chargement de la page

        mapInstance.on('click', handleClick);

        return () => {
            mapInstance.off('click', handleClick);
            mapInstance.remove(); // Libérer les ressources de la carte lors du démontage du composant
        };
    }, []); // Utilisation d'un tableau vide pour exécuter l'effet une seule fois à l'initialisation

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ latitude, longitude });
                    const latlng = L.latLng(latitude, longitude);
                    if (map) {
                        map.setView(latlng, 16);
                        L.marker(latlng).addTo(map);
                    }
                },
                error => {
                    console.error('Error getting current location:', error);
                    alert('Error getting current location. Please make sure your browser allows location access.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    const handleClick = (e: L.LeafletMouseEvent) => {
        const latlng = e.latlng;
        if (!startPointMarker) {
            const marker = L.marker(latlng).addTo(map!);
            setStartPointMarker(marker);
            const startInput = document.getElementById('start') as HTMLInputElement | null;
            if (startInput) startInput.value = `${latlng.lat}, ${latlng.lng}`;
        } else if (!endPointMarker) {
            const marker = L.marker(latlng).addTo(map!);
            setEndPointMarker(marker);
            const endInput = document.getElementById('end') as HTMLInputElement | null;
            if (endInput) endInput.value = `${latlng.lat}, ${latlng.lng}`;
        }
    };

    const calculateRoute = () => {
        // Ajouter le code pour calculer l'itinéraire ici
    };

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div id="map" style={{ height: '90%', width: '100%' }}></div>
            <div>
                <label htmlFor="start">Start Point:</label>
                <input type="text" id="start" name="start" value={currentLocation ? `${currentLocation.latitude}, ${currentLocation.longitude}` : ''} />
                <label htmlFor="end">End Point:</label>
                <input type="text" id="end" name="end" />
                <button onClick={getCurrentLocation}>Current Location</button>
                <button onClick={calculateRoute}>Calculate Route</button>
            </div>
        </div>
    );
};

export default MapComponent;
