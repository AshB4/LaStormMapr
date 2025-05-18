import { useState, useEffect } from "react";
import ShelterCard from "../UI/shelterCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import PrimaryButton from "../UI/primaryButton";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const HomePage = () => {
  const [shelters, setShelters] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  const [filterType, setFilterType] = useState("All"); 
const visibleShelters = filterType === "All"
  ? shelters
  : shelters.filter(s => s.type === filterType);


useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      setUserLocation([latitude, longitude]);
    },
    (err) => console.warn("Location access denied", err)
  );
}, []);


  useEffect(() => {
    fetch("http://localhost:8000/api/shelters.php")
      .then((res) => res.json())
      .then(setShelters)
      .catch((err) => console.error("Failed to fetch shelter data:", err));
  }, []);

  useEffect(() => {
  const fetchPetPreparednessData = async () => {
    try {
      const res = await fetch("https://data.brla.gov/resource/3t7g-ia4h.json");
      const data = await res.json();

      const formatted = data
        .filter(item => item.the_geom && item.the_geom.coordinates)
        .map((item, i) => ({
          id: i,
          name: item.business_name || "Pet Facility",
          address: item.full_address,
          phone: item.phone_number,
          city: item.city,
          zip: item.zip,
          website: item.website,
          latitude: parseFloat(item.the_geom.coordinates[1]),
          longitude: parseFloat(item.the_geom.coordinates[0]),
          type: "Pet Shelter"
        }));

      setShelters(prev => [...prev, ...formatted]);
    } catch (err) {
      console.error("Error fetching pet data:", err);
    }
  };

  fetchPetPreparednessData();
}, []);


  return (
    <div className="container my-4">
      <h1 className="text-primary mb-4 fw-bold">Find a Shelter Near You</h1>

      <div className="map-wrapper mb-4">
        <MapContainer
          center={[30.4515, -91.1871]}
          zoom={8}
          scrollWheelZoom={true}
          style={{ height: "400px", width: "100%" }}
        >
          {userLocation && (
  <Marker position={userLocation}>
    <Popup>You are here</Popup>
  </Marker>
)}

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {visibleShelters.map((shelter, index) => (
            <Marker
              key={index}
              position={[parseFloat(shelter.latitude), parseFloat(shelter.longitude)]}
            >
              <Popup>
                <strong>{shelter.name}</strong><br />
                {shelter.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="row">
        {visibleShelters.map((shelter, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <ShelterCard shelter={shelter} index={index} />
          </div>
        ))}
      </div>
      <div className="mb-3 d-flex gap-2">
  <button className={`btn ${filterType === "All" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setFilterType("All")}>All</button>
  <button className={`btn ${filterType === "Pet Shelter" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setFilterType("Pet Shelter")}>Pet Shelters</button>
  <button className={`btn ${filterType === "General Shelter" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setFilterType("General Shelter")}>General Shelters</button>
</div>
    </div>
  );
};

export default HomePage;
