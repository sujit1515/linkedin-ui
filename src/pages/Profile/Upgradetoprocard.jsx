export default function UpgradeToProCard() {
  return (
    <div style={{ background: "#eff6ff", borderRadius: 12, border: "1px solid #bfdbfe", padding: "24px 20px", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: "50%", background: "#dbeafe",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 14px", fontSize: 24, color: "#2563eb"
      }}>⚡</div>

      <h3 style={{ margin: "0 0 8px", fontWeight: 700, fontSize: 16, color: "#111827" }}>Upgrade to Pro</h3>
      <p style={{ margin: "0 0 16px", fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
        See who viewed your profile in the last 90 days and unlock premium learning content.
      </p>

      <button style={{
        width: "100%", padding: "10px 0", background: "#fff",
        border: "1.5px solid #d1d5db", borderRadius: 8,
        fontWeight: 700, fontSize: 14, color: "#374151",
        cursor: "pointer", transition: "all .15s"
      }}
        onMouseEnter={e => { e.currentTarget.style.background = "#f9fafb"; e.currentTarget.style.borderColor = "#6b7280"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#d1d5db"; }}
      >
        Try for Free
      </button>
    </div>
  );
}