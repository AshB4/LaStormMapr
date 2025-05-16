const OutlineButton = ({ children, onClick, type = "button", className = "" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`btn btn-outline-primary ${className}`}
    style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
  >
    {children}
  </button>
);

export default OutlineButton;
