// "use client"
export default function FeaturedSection() {
  const items = [
    {
      type: "article",
      bg: "linear-gradient(135deg,#0ea5e9,#1d4ed8)",
      emoji: "📱",
      title: "Redesigning Search for 1B Users",
      sub: "Medium · 12 min read",
    },
    {
      type: "pdf",
      bg: "#f3f4f6",
      emoji: "📄",
      title: "UX Research Framework 2024",
      sub: "PDF · 4.2 MB",
    },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#111827" }}>Featured</h2>
        <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 20, color: "#374151", fontWeight: 300 }}>+</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
        {items.map(({ bg, emoji, title, sub, type }) => (
          <div key={title} style={{ borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden", cursor: "pointer", transition: "box-shadow .2s" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.1)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
          >
            <div style={{
              height: 130, background: bg,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: type === "pdf" ? 40 : 56, color: type === "pdf" ? "#9ca3af" : "#fff"
            }}>
              {type === "pdf" ? "📎" : emoji}
            </div>
            <div style={{ padding: "12px 14px" }}>
              <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 14, color: "#111827", lineHeight: 1.4 }}>{title}</p>
              <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}