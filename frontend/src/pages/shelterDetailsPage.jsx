import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PrimaryButton from "../UI/primaryButton";

const ShelterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [shelters, setShelters] = useState([]);
  const shelter = shelters[parseInt(id)];

  useEffect(() => {
    fetch("http://localhost:8000/api/shelters.php")
      .then((res) => res.json())
      .then(setShelters)
      .catch((err) => console.error("Failed to load shelter data", err));
  }, []);

  if (!shelter) {
    return (
      <div className="container my-5 text-center">
        <h2 className="text-danger">Shelter not found.</h2>
        <PrimaryButton onClick={() => navigate("/")}>Back to Map</PrimaryButton>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1 className="text-primary mb-3">{shelter.name}</h1>
      <p><strong>Address:</strong> {shelter.address}</p>
      <p><strong>Phone:</strong> <a href={`tel:${shelter.phone}`}>{shelter.phone}</a></p>
      <p><strong>Details:</strong> {shelter.details}</p>
      <p><strong>Website:</strong> <a href={shelter.website} target="_blank" rel="noreferrer">{shelter.website}</a></p>

      <PrimaryButton onClick={() => navigate("/")}>← Back to Search</PrimaryButton>
    </div>
  );
};

export default ShelterDetailPage;
