export default function QuickActions() {
  const items = [
    { icon: "💼", label: "Job Tracker",    bg: "#dbeafe", color: "#2563eb" },
    { icon: "📖", label: "My Courses",     bg: "#fee2e2", color: "#dc2626" },
    { icon: "🎓", label: "Admission Hub",  bg: "#f3f4f6", color: "#374151" },
  ];

  return (
    <div style={{
      background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb",
      padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)", width: 280
    }}>
      {/* Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontWeight: 700, fontSize: 15, color: "#111827" }}>
        <span style={{ color: "#f97316", fontSize: 18 }}>⚡</span>
        Quick Actions
      </div>

      {/* Items */}
      {items.map(({ icon, label, bg, color }) => (
        <button
          key={label}
          style={{
            display: "flex", alignItems: "center", gap: 14, width: "100%",
            padding: "10px 8px", border: "none", background: "transparent",
            borderRadius: 8, cursor: "pointer", textAlign: "left",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <div style={{
            width: 38, height: 38, borderRadius: 10, background: bg,
            color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18
          }}>
            {icon}
          </div>
          <span style={{ fontSize: 14, fontWeight: 500, color: "#374151" }}>{label}</span>
        </button>
      ))}
    </div>
  );
}