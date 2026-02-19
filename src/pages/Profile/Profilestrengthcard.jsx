export default function ProfileStrengthCard() {
  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", fontWeight: 700, fontSize: 15, color: "#111827" }}>
          <span style={{ color: "#f97316" }}>⚡</span> Profile Strength
        </div>
        <span style={{ fontWeight: 800, fontSize: 15, color: "#2563eb" }}>85%</span>
      </div>

      {/* Progress bar */}
      <div style={{ height: 6, background: "#e5e7eb", borderRadius: 99, marginBottom: 12 }}>
        <div style={{ height: "100%", width: "85%", background: "linear-gradient(90deg,#2563eb,#60a5fa)", borderRadius: 99 }} />
      </div>

      <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
        Nearly there! Add your{" "}
        <a href="#" style={{ color: "#111827", fontWeight: 700, textDecoration: "underline" }}>volunteer experience</a>{" "}
        to reach All-Star status.
      </p>
    </div>
  );
}