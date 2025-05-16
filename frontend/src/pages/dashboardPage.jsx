import { useEffect, useState } from "react";
import PrimaryButton from "../UI/primaryButton";

const DashboardPage = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/shelters.php")
      .then((res) => res.json())
      .then(setShelters)
      .catch((err) => console.error("Error loading shelters:", err));
  }, []);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary mb-0">Shelter Dashboard</h2>
        <a
          href="http://localhost:8000/export/shelters.csv"
          className="btn btn-outline-primary"
          download
        >
          📤 Export CSV
        </a>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Details</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {shelters.map((shelter, idx) => (
              <tr key={idx}>
                <td>{shelter.name}</td>
                <td>{shelter.address}</td>
                <td>{shelter.phone}</td>
                <td style={{ maxWidth: "300px" }}>{shelter.details}</td>
                <td>
                    <PrimaryButton>
                  <a href={shelter.website} target="_blank" rel="noreferrer">
                    Visit
                  </a>
                  </PrimaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
