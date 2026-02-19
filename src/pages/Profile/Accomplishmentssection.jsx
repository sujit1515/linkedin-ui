export default function AccomplishmentsSection() {
  const categories = [
    {
      icon: "📖", bg: "#dbeafe", color: "#2563eb",
      title: "Publications",
      items: ["The Future of Design Systems (2023)", "Inclusive UX for Enterprise (2021)"],
    },
    {
      icon: "🏅", bg: "#dbeafe", color: "#2563eb",
      title: "Patents",
      items: ["Context-aware UI Navigation (US Patent 11,234,567)", "Gesture-based Control Systems"],
    },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <h2 style={{ margin: "0 0 20px", fontWeight: 700, fontSize: 20, color: "#111827" }}>Accomplishments</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
        {categories.map(({ icon, bg, color, title, items }) => (
          <div key={title} style={{ background: "#f9fafb", borderRadius: 10, padding: "16px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "#111827" }}>{title}</p>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              {items.map(item => (
                <li key={item} style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, marginBottom: 4 }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}