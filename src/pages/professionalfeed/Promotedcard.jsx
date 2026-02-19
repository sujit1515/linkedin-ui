export default function PromotedCard() {
  const footerLinks = ["About", "Accessibility", "Help Center", "Privacy & Terms", "Advertising", "Business Services"];

  return (
    <div style={{ width: 280 }}>
      {/* Promoted Card */}
      <div style={{
        background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb",
        padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)", marginBottom: 16
      }}>
        <p style={{ textAlign: "center", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#9ca3af", textTransform: "uppercase", margin: "0 0 12px" }}>
          Promoted
        </p>

        {/* Image area */}
        <div style={{
          width: "100%", height: 130, borderRadius: 10, overflow: "hidden",
          background: "linear-gradient(135deg,#fef9ee,#fde68a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 56, marginBottom: 14
        }}>📚</div>

        <h4 style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 15, color: "#111827" }}>
          Advanced React Patterns
        </h4>
        <p style={{ margin: "0 0 14px", fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>
          Master the art of high-scale React architectures.
        </p>

        <button style={{
          width: "100%", padding: "10px 0", border: "1.5px solid #d1d5db",
          borderRadius: 8, background: "#fff", fontWeight: 700,
          fontSize: 14, color: "#374151", cursor: "pointer", transition: "background .15s"
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
          onMouseLeave={e => e.currentTarget.style.background = "#fff"}
        >
          Enroll Now
        </button>
      </div>

      {/* Footer Links */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", padding: "0 4px" }}>
        {footerLinks.map(link => (
          <a key={link} href="#" style={{ fontSize: 12, color: "#9ca3af", textDecoration: "none", transition: "color .15s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#374151"}
            onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}
          >{link}</a>
        ))}
        <p style={{ width: "100%", margin: "6px 0 0", fontSize: 12, color: "#2563eb", fontWeight: 700 }}>
          EduConnect Pro © 2024
        </p>
      </div>
    </div>
  );
}