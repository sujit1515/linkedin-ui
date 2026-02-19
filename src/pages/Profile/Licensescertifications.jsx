export default function LicensesCertifications() {
  const certs = [
    {
      title: "Professional UX Design Certificate",
      issuer: "Google (via Coursera)",
      issued: "Issued Dec 2023 · No Expiration",
    },
    {
      title: "Accessibility Engineering Specialist",
      issuer: "IAAP",
      issued: "Issued Jun 2022 · Expired Jun 2025",
    },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#111827" }}>Licenses & Certifications</h2>
        <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 20, color: "#374151" }}>+</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
        {certs.map(({ title, issuer, issued }) => (
          <div key={title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>🛡️</div>
            <div>
              <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 14, color: "#111827" }}>{title}</p>
              <p style={{ margin: "0 0 2px", fontSize: 13, color: "#374151" }}>{issuer}</p>
              <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>{issued}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}