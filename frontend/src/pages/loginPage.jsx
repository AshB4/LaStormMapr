import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../UI/primaryButton";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with actual auth later
    if (email === "admin@example.com" && password === "letmein") {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-primary mb-4 text-center">Admin Login</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="letmein"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <PrimaryButton type="submit" className="w-100">
          Log In
        </PrimaryButton>
      </form>
    </div>
  );
};

export default LoginPage;
//On submit, it checks hardcoded creds (admin@example.com, letmein)...fix later