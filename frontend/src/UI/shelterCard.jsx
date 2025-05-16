import { useNavigate } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const ShelterCard = ({ shelter, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shelter/${index}`);
  };

  return (
    <div
      className="card mb-4 border-primary shadow-sm hover-shadow"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">{shelter.name}</h5>

        <p className="card-text mb-1">
          <strong>Address:</strong> {shelter.address}
        </p>
        <p className="card-text mb-1">
          <strong>Phone:</strong>{" "}
          <a
            href={`tel:${shelter.phone}`}
            className="link-primary"
            onClick={(e) => e.stopPropagation()}
          >
            {shelter.phone}
          </a>
        </p>

        <p className="card-text text-muted mb-3" style={{ fontSize: "0.95rem" }}>
          {shelter.details}
        </p>

        <a
          href={shelter.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary d-inline-flex align-items-center"
          onClick={(e) => e.stopPropagation()} // prevent triggering full card click
        >
          Visit Website <ArrowRight className="ms-2" />
        </a>
      </div>
    </div>
  );
};

export default ShelterCard;
