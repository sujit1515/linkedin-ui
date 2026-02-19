export default function RecommendationsSection() {
  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#111827" }}>Recommendations</h2>
        <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 20, color: "#374151" }}>+</button>
      </div>

      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        {/* Avatar */}
        <div style={{
          width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg,#fde68a,#f97316)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, flexShrink: 0
        }}>👩</div>

        <div>
          <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 15, color: "#111827" }}>Sarah Jenkins</p>
          <p style={{ margin: "0 0 12px", fontSize: 13, color: "#6b7280" }}>Engineering Manager at TechFlow</p>
          <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.7, fontStyle: "italic" }}>
            "Alex is one of the most detail-oriented designers I've ever had the pleasure of working with. Their ability to translate complex technical requirements into beautiful, intuitive interfaces is truly exceptional. They transformed our design-dev workflow."
          </p>
        </div>
      </div>
    </div>
  );
}