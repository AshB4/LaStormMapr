import { useState, useEffect } from "react";
import ShelterCard from "../UI/shelterCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { fetchAndNormalizeShelters } from "../api/mergeAllShelters";
import { fetchStormAlerts } from "../api/fetshStormAlerts";
import MapMarker from "../UI/mapMarker";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

// Override default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const HomePage = () => {
  const [shelters, setShelters] = useState([]);
  const [storms, setStorms] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [filterType, setFilterType] = useState("All");

  const visibleShelters =
    filterType === "All"
      ? shelters
      : shelters.filter((s) => s.type === filterType);

  // Get user geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
      },
      (err) => console.warn("Location access denied", err)
    );
  }, []);

  // Fetch shelters and storms
  useEffect(() => {
    const loadData = async () => {
      const shelterData = await fetchAndNormalizeShelters();
      setShelters(shelterData);

      const stormData = await fetchStormAlerts();
      setStorms(stormData);
    };

    loadData();
  }, []);

  return (
    <div className="container my-4">
      {storms.length > 0 && (
        <div className="alert alert-warning text-center fw-bold">
          ⚠️ {storms[0].headline || `${storms[0].event} in effect`}
          <br />
          <small className="fw-normal">{storms[0].area}</small>
        </div>
      )}

      <h1 className="text-primary mb-4 fw-bold">Find a Shelter Near You</h1>

      <div className="mb-3 d-flex gap-2">
        <button
          className={`btn ${
            filterType === "All" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilterType("All")}
        >
          All
        </button>
        <button
          className={`btn ${
            filterType === "Pet Shelter" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilterType("Pet Shelter")}
        >
          Pet Shelters
        </button>
        <button
          className={`btn ${
            filterType === "General Shelter"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setFilterType("General Shelter")}
        >
          General Shelters
        </button>
      </div>

      <MapContainer
        center={[30.4515, -91.1871]}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {visibleShelters.map((shelter, index) => {
          const position = [
            parseFloat(shelter.latitude),
            parseFloat(shelter.longitude),
          ];

          const popupContent = (
            <>
              <strong>{shelter.name}</strong>
              <br />
              {shelter.address}
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${shelter.latitude},${shelter.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </>
          );

          const handleClick = () => {
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${shelter.latitude},${shelter.longitude}`;
            window.open(mapsUrl, "_blank");
          };

          return (
            <MapMarker
              key={`marker-${index}`}
              position={position}
              popupText={popupContent}
              onClick={handleClick}
            />
          );
        })}
      </MapContainer>

      <div className="row mt-4">
        {visibleShelters.map((shelter, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <ShelterCard shelter={shelter} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
