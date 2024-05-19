import React, { useState, useEffect } from "react";
import L, { LatLngExpression, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import MagicButton from "./magicButton";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

declare module "leaflet" {
  namespace Polyline {
    function fromEncoded(encoded: string, options?: PolylineOptions): Polyline;
  }
}

const MapComponent: React.FC = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState<L.Map | null>(null);
  const [startPointMarker, setStartPointMarker] = useState<L.Marker | null>(
    null
  );
  const [endPointMarker, setEndPointMarker] = useState<L.Marker | null>(null);
  const [routePolyline, setRoutePolyline] = useState<L.Polyline | null>(null);
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>({
    latitude: 33.583506,
    longitude: -7.642020,
  });

  useEffect(() => {
    const mapInstance = L.map("map").setView(
      [currentLocation!.latitude, currentLocation!.longitude] as LatLngExpression,
      13
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapInstance);
    setMap(mapInstance);

    mapInstance.on("click", handleClick);

    return () => {
      mapInstance.off("click", handleClick);
      mapInstance.remove();
    };
  }, []);

  const getCurrentLocation = () => {
  if (map && currentLocation) {
    map.setView(
      [currentLocation.latitude, currentLocation.longitude] as LatLngExpression,
      16
    );
    if (!startPointMarker && !endPointMarker) {
      const marker = L.marker([currentLocation.latitude, currentLocation.longitude]).addTo(
        map
      );
      setStartPointMarker(marker);
      setEndPointMarker(marker);
    } else if (!startPointMarker) {
      const marker = L.marker([currentLocation.latitude, currentLocation.longitude]).addTo(
        map
      );
      setStartPointMarker(marker);
    } else if (!endPointMarker) {
      const marker = L.marker([currentLocation.latitude, currentLocation.longitude]).addTo(
        map
      );
      setEndPointMarker(marker);
    }
  }
};


  const handleClick = (e: L.LeafletMouseEvent) => {
    const latlng = e.latlng;
    if (!startPointMarker) {
      const marker = L.marker(latlng).addTo(map!);
      setStartPointMarker(marker);
      const startInput = document.getElementById(
        "start"
      ) as HTMLInputElement | null;
      if (startInput) startInput.value = `${latlng.lat}, ${latlng.lng}`;
    } else if (!endPointMarker) {
      const marker = L.marker(latlng).addTo(map!);
      setEndPointMarker(marker);
      const endInput = document.getElementById(
        "end"
      ) as HTMLInputElement | null;
      if (endInput) endInput.value = `${latlng.lat}, ${latlng.lng}`;
    }
  };

  const localisation = sessionStorage.getItem("Localistion");

  const calculateRoute = () => {
    // Add code to calculate the route here
  };

  return (
    <>
      <div style={{ width: "100vw", height: "80vh", marginTop: "50px" }}>
        <div id="map" style={{ height: "90%", width: "100%" }}></div>
        <div>
          <label htmlFor="start">Start Point:</label>
          <input
            type="text"
            id="start"
            name="start"
            value={
              currentLocation
                ? `${currentLocation.latitude}, ${currentLocation.longitude}`
                : ""
            }
          />
          <label htmlFor="end">End Point:</label>
          <input type="text" id="end" name="end" defaultValue={localisation} />

          <Button className="ml-5" variant='outline' onClick={getCurrentLocation}>Localiser le restaurant</Button>
          
        </div>
      </div>
      <MagicButton
        text="Mes commandes à livrer"
        onClick={() => navigate("/commande")}
      />
    </>
  );
};

export default MapComponent;
