export default function ProfileAnalyticsCard() {
  const stats = [
    { value: "1,248", label: "Profile views", change: "+12%", icon: "👤" },
    { value: "542",   label: "Search appearances", change: "+5%", icon: "🔍" },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <h3 style={{ margin: "0 0 16px", fontWeight: 700, fontSize: 16, color: "#111827" }}>Profile Analytics</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {stats.map(({ value, label, change, icon }, i) => (
          <div key={label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0" }}>
              <div>
                <p style={{ margin: "0 0 2px", fontWeight: 800, fontSize: 24, color: "#111827" }}>{value}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>
                  {label} <span style={{ color: "#16a34a" }}>↗ {change}</span>
                </p>
              </div>
              <span style={{ fontSize: 24, color: "#d1d5db" }}>{icon}</span>
            </div>
            {i < stats.length - 1 && <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: 0 }} />}
          </div>
        ))}
      </div>

      <button style={{
        display: "block", width: "100%", marginTop: 12,
        border: "none", background: "none", color: "#2563eb",
        fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "center"
      }}>View All Analytics</button>
    </div>
  );
}