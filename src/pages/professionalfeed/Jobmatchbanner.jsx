export default function JobMatchBanner() {
  return (
    <div style={{
      background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb",
      padding: "14px 20px", display: "flex", alignItems: "center", gap: 14,
      boxShadow: "0 1px 4px rgba(0,0,0,.07)", width: "100%", maxWidth: 560
    }}>
      {/* Icon */}
      <div style={{
        width: 46, height: 46, borderRadius: "50%", background: "#dbeafe",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22, flexShrink: 0
      }}>⚡</div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 14, color: "#111827" }}>
          New Opportunities matching your profile!
        </p>
        <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>
          There are 12 new UI/UX Designer roles at top startups.
        </p>
      </div>

      {/* CTA Button */}
      <button style={{
        background: "#2563eb", color: "#fff", border: "none",
        borderRadius: 20, padding: "10px 20px", fontWeight: 700,
        fontSize: 13, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
        transition: "background .15s"
      }}
        onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
        onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
      >
        View Jobs →
      </button>
    </div>
  );
}