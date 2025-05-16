const PrimaryButton = ({ children, onClick, type = "button", className = "" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`btn btn-primary ${className}`}
    style={{ backgroundColor: "var(--primary)", borderColor: "var(--accent)" }}
  >
    {children}
  </button>
);

export default PrimaryButton;
