import { useNavigate } from "react-router-dom";
import PrimaryButton from "../UI/primaryButton";
import errorimg from "../assets/404Gone.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <img
        src={errorimg}
        alt="Page not found - blown off the map"
        style={{ maxWidth: "400px", marginBottom: "1.5rem" }}
      />
      <h1 className="text-danger fw-bold">404: Page Not Found</h1>
      <p className="text-muted mb-4">
        This page got blown off the map. Might wanna hunker down and head back.
      </p>
      <PrimaryButton onClick={() => navigate("/")}>Back to Safety</PrimaryButton>
    </div>
  );
};

export default NotFoundPage;
