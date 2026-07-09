function Features() {
  const features = [
    {
      title: "Citizen Registration",
      description: "Register citizens securely with role-based access.",
    },
    {
      title: "Grievance Management",
      description: "Submit and track complaints online.",
    },
    {
      title: "Reports & Analytics",
      description: "Visualize complaint statistics and trends.",
    },
  ];

  return (
    <div style={{ padding: "60px 40px", textAlign: "center" }}>
      <h2>Our Services</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              width: "280px",
              padding: "20px",
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;