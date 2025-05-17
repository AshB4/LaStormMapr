import {useState, useEffect} from "react";
import ShelterCard from "../UI/shelterCard";

const HomePage = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/shelters.php")
      .then((res) => res.json())
      .then(setShelters)
      .catch((err) => console.error("Failed to fetch shelter data:", err));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-primary mb-4 fw-bold">Find a Shelter Near You</h1>

      {/* Map Section */}
      <div className="map-wrapper mb-4">
        {/* Replace this with your actual map component later */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", backgroundColor: "#e0f2f1" }}
        >
          <p className="text-muted">🌐 Map will go here (Leaflet / OpenStreetMap)</p>
        </div>
      </div>

      {/* Shelter Cards */}
     {shelters.map((shelter, index) => (
  <div className="col-md-6 col-lg-4" key={index}>
    <ShelterCard shelter={shelter} index={index} />
  </div>
))}
    </div>
  );
};

export default HomePage;
