import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {

  const role = localStorage.getItem("role");

  return (
    <div style={header}>

      <div>
        <h2 style={{ margin: 0 }}>Welcome 👋</h2>
        <p style={{ margin: 0, color: "#666" }}>
          {role} Portal
        </p>
      </div>

      <div style={profile}>

        <AccountCircleIcon
          sx={{
            fontSize: 45,
            color: "#1565C0",
          }}
        />

        <div>
          <strong>{role}</strong>
          <br />
          Logged In
        </div>

      </div>

    </div>
  );
}

const header = {
  background: "white",
  position: "sticky",
  top: 0,
  zIndex: 100,
  padding: "20px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,.08)",
  marginBottom: "25px",
};

const profile = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

export default Header;